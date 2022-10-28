import { parse } from "svelte/compiler";
import shiki from "shiki";

function getCodeComponents(node) {
	const components = [];
	function traverse(node) {
		if (node.type === "Element" && node.name === "code") {
			components.push(node);
		}

		if (node.children && node.children.length > 0) {
			node.children.forEach((n) => traverse(n));
		}
	}

	traverse(node);

	return components;
}

function getAttributes(node) {
	const attribs = {
		lang: null,
		code: null,
		inline: false,
	};
	for (let i = 0; i < node.attributes.length; i++) {
		const attr = node.attributes[i];

		if (attr.name === "data-lang") {
			attribs.lang = attr.value[0].data;
		}

		if (attr.name === "data-code") {
			let value = attr.value[0].expression.quasis[0].value.cooked;

			value = value.replace(/\t/g, "    ");
			value = value.trim();
			attribs.code = value;
		}

		if (attr.name === "data-inline") {
			attribs.inline = true;
		}
	}

	return attribs;
}

async function processCodeBlocks(content) {
	if (!content.includes("<code")) return content;

	const ast = parse(content);
	if (!ast) return content;

	const nodes = getCodeComponents(ast.html);

	if (!nodes.length) return content;

	const highlighter = await shiki.getHighlighter({
		theme: "min-light",
	});

	let offset = 0;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		const { lang, code, inline } = getAttributes(node);

		const tokens = highlighter.codeToThemedTokens(code, lang);

		let highlightedCode = "";
		if (inline) {
			highlightedCode += `<code class="inline-code">`;
		} else {
			highlightedCode += "<pre><code>";
		}

		for (let i = 0; i < tokens.length; i++) {
			const lines = tokens[i];

			let line = "<span>";
			for (let j = 0; j < lines.length; j++) {
				const token = lines[j];

				let text = token.content;

				text = text.replaceAll("{", "&#123;");
				text = text.replaceAll("}", "&#125;");
				text = text.replaceAll(">", "&gt;");
				text = text.replaceAll("<", "&lt;");

				if (text.trim()) {
					line += `<span style="color: ${token.color}">${text}</span>`;
				} else {
					line += `<span>${text}</span>`;
				}
			}

			line += "</span>\n";
			highlightedCode += line;
		}

		highlightedCode += "</code>";
		if (!inline) {
			highlightedCode += "</pre>";
		}

		const startContent = content.slice(0, node.start + offset);
		const endContent = content.slice(node.end + offset);

		const len = highlightedCode.length - (node.end - node.start);
		offset += len;

		content = startContent + highlightedCode + endContent;
	}

	return content;
}

function process() {
	return {
		markup: async ({ content }) => {
			const code = await processCodeBlocks(content);
			return { code };
		},
	};
}

export default process;
