<script>
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Seo from "$lib/Seo.svelte";
</script>

<Seo
	title="RPG Equipment Requirements"
	description="Toughts on  hard/soft requirements for equipment in videogames"
	keywords="Game Design, Equipment, Level, Attributes, RPG, Gamedev"
/>

<Main>
	<Section>
		<Title timestamp={1672335496}>RPG Equipment Requirements</Title>

		<p>
			This is strictly about single-player games, and although it may
			happen in other genres, RPGs, especially "diablo-like" ARPGs, are
			the biggest offenders.
		</p>
	</Section>

	<Section>
		<Subtitle id="prelude">Prelude</Subtitle>
		<p>
			I'm playing "unnamed ARPG" and, early in the game, while progressing
			through the main quest line, I find a cave with an over-leveled
			boss. The game tells you that the boss is going to be a challenge,
			but, after mowing down hundreds of enemies, it's refreshing to have
			to try hard.
		</p>

		<p>
			I beat the boss and as a reward, I get a piece of equipment which is
			a clear upgrade over what I have. Unfortunately, the equipment has a
			minimum requirement of 5 levels above my current level. It is very
			likely that I just wasted my time.
		</p>
	</Section>

	<Section>
		<Subtitle id="the-problems">The Problems</Subtitle>

		<ul>
			<li>
				Not getting a reward that you can immediately use feels bad. One
				could argue that in a utopic game the reward is beating the boss
				itself after understanding the mechanics and playing well. This
				ranges from very much harder than dropping a usable reward to
				impossible to do with many bosses, especially in ARPGs.
			</li>
			<li>
				It discourages exploration of the current area. Time is limited
				and once you understand that it is likely that every hard
				encounter will drop equipment for a higher level, it makes more
				sense to just skip to the next intended area.
			</li>
			<li>
				It clutters inventory space. Storing unused equipment in a
				storage box also doesn't help because comparing drops with
				current equipment requires the extra step of checking the
				storage. Often in these types of games min-maxing is encouraged
				by the developers and sought by the players, so, it should be
				made frictionless.
			</li>
			<li>
				I've read that "anticipation makes it so that when you can use
				the item it feels better". I largely disagree, it can happen but
				there needs to be some agency for it to work. One example that
				comes to mind is a situation in which you have a "broken" item
				and you have to do certain steps to fix it. It's much different
				than asking the user to grind levels.
			</li>
		</ul>
	</Section>

	<Section>
		<Subtitle id="my-take">My take</Subtitle>
		<ul>
			<li>
				<p>
					Attributes soft requirements for almost every item. It makes
					sense that I can at least wield a sword even if I have low
					strength at the cost of doing less damage, slower attack
					speed, using more stamina, or whatever penalty fits.
				</p>
				<p>
					There can still be weapons with more stringent requirements
					but make it fun, complex (i.e. avoid requirements like "kill
					2 billion demons"), and meaningful!
				</p>
			</li>

			<li>
				<p>
					Scale equipment with attributes. This fixes the problem of
					not being rewarded for early-game exploration and the need
					to have the same item with different stats. No more
					"Longsword +1" and "Longsword +45".
				</p>

				<p>
					Farming for better stats on the same item is however fun for
					many players in such games so it should be kept in the game,
					just relegated to the end-game content.
				</p>
			</li>

			<li>
				Inventory cluttering should be largely dealt with by this
				design, but, of course, inventory management is still a part of
				these types of games so it won't magically get better for
				whoever doesn't like it.
			</li>

			<li>
				<p>
					Most importantly, try to do as little as possible in
					defining how a player should play the game.
				</p>
				<p>
					I feel like a lot of issues arise from forcing the player to
					play the game in a specific way. Embrace allowing the player
					to make choices that define how they will experience the
					game.
				</p>
			</li>
		</ul>
	</Section>
</Main>
