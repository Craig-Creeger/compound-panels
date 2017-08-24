import React from 'react'

import CompoundPanels from './components/compound-panels/compound-panels'

const App = () => {
	return (
		<CompoundPanels activePanels={[1]}>
			<div title='Aardvark' height='120px'>
				<p>
					The aardvark is a medium-sized, burrowing, nocturnal mammal native to Africa. It is the
					only living species of the order Tubulidentata, although other prehistoric species and
					genera of Tubulidentata are known. Unlike other insectivores, it has a long pig-like
					snout, which is used to sniff out food. It roams over most of the southern two-thirds of
					the African continent, avoiding areas that are mainly rocky.
				</p>
			</div>
			<div title='Cat' height='320px'>
				<p>
					The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal.
					They are often called house cats when kept as indoor pets or simply cats when there is no
					need to distinguish them from other felids and felines. Cats are often valued by humans
					for companionship and for their ability to hunt vermin. There are more than 70 cat breeds,
					though different associations proclaim different numbers according to their standards.{' '}
					<button>Sample Button</button>
				</p>
				<p>
					Cats are similar in anatomy to the other felids, with a strong flexible body, quick
					reflexes, sharp retractable claws, and teeth adapted to killing small prey. Cat senses fit
					a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high
					in frequency for human ears, such as those made by mice and other small animals. They can
					see in near darkness. <input type='text' size={14} placeholder='Sample textbox' /> Like most
					other mammals, cats have poorer color vision and a better sense of smell than humans.
					Cats, despite being solitary hunters, are a social species and cat communication includes
					the use of a variety of vocalizations (mewing, purring, trilling, hissing, growling, and
					grunting), as well as cat pheromones and types of cat-specific body language.
				</p>
			</div>
			<div title='Dog' height='160px'>
				<p>
					The domestic dog (Canis lupus familiaris or Canis familiaris) is a member of genus Canis
					(canines) that forms part of the wolf-like canids, and is the most widely abundant
					carnivore. The dog and the extant gray wolf are sister taxa, with modern wolves not
					closely related to the wolves that were first domesticated, which implies that the direct
					ancestor of the dog is extinct. The dog was the first domesticated species and has been
					selectively bred over millennia for various behaviors, sensory capabilities, and physical
					attributes.
				</p>
			</div>
			<div title='Polar Bear' height='300px'>
				<p>
					The polar bear (Ursus maritimus) is a carnivorous bear whose native range lies largely
					within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and
					surrounding land masses. It is a large bear, approximately the same size as the omnivorous
					Kodiak bear (Ursus arctos middendorffi). A boar (adult male) weighs around 350–700 kg
					(772–1,543 lb), while a sow (adult female) is about half that size. Although it is the
					sister species of the brown bear, it has evolved to occupy a narrower ecological niche,
					with many body characteristics adapted for cold temperatures, for moving across snow, ice
					and open water, and for hunting seals, which make up most of its diet. Although most polar
					bears are born on land, they spend most of their time on the sea ice. Their scientific
					name means “maritime bear” and derives from this fact. Polar bears hunt their preferred
					food of seals from the edge of sea ice, often living off fat reserves when no sea ice is
					present. Because of their dependence on the sea ice, polar bears are classified as marine
					mammals; an alternative basis for classification as marine mammals is that they depend on
					the ocean as their main food source.
				</p>
			</div>
			<div title='Zebra' height='120px'>
				<p>
					Zebras are several species of African equids (horse family) united by their distinctive
					black and white striped coats. Their stripes come in different patterns, unique to each
					individual. They are generally social animals that live in small harems to large herds.
					Unlike their closest relatives, horses and donkeys, zebras have never been truly
					domesticated.
				</p>
			</div>
		</CompoundPanels>
	)
}

export default App
