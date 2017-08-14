import React from 'react'

import CompoundPanels from './components/compound-panels/compound-panels'

const App = () => {
	return (
		<CompoundPanels panelsType='accordion'>
			<div title='Aardvark'>
				<p>The aardvark is a medium-sized, burrowing, nocturnal mammal native to Africa. It is the only living species of the order Tubulidentata, although other prehistoric species and genera of Tubulidentata are known. Unlike other insectivores, it has a long pig-like snout, which is used to sniff out food. It roams over most of the southern two-thirds of the African continent, avoiding areas that are mainly rocky.</p>
			</div>
			<div title='Cat'>
				<p>The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin. There are more than 70 cat breeds, though different associations proclaim different numbers according to their standards.</p>
			</div>
			<div title='Dog'>
				<p>The domestic dog (Canis lupus familiaris or Canis familiaris) is a member of genus Canis (canines) that forms part of the wolf-like canids, and is the most widely abundant carnivore. The dog and the extant gray wolf are sister taxa, with modern wolves not closely related to the wolves that were first domesticated, which implies that the direct ancestor of the dog is extinct. The dog was the first domesticated species and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.</p>
			</div>
			<div title='Polar Bear'>
				<p>The polar bear (Ursus maritimus) is a carnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is a large bear, approximately the same size as the omnivorous Kodiak bear (Ursus arctos middendorffi). A boar (adult male) weighs around 350–700 kg (772–1,543 lb), while a sow (adult female) is about half that size. Although it is the sister species of the brown bear, it has evolved to occupy a narrower ecological niche, with many body characteristics adapted for cold temperatures, for moving across snow, ice and open water, and for hunting seals, which make up most of its diet.</p>
			</div>
			<div title='Zebra'>
				<p>Zebras are several species of African equids (horse family) united by their distinctive black and white striped coats. Their stripes come in different patterns, unique to each individual. They are generally social animals that live in small harems to large herds. Unlike their closest relatives, horses and donkeys, zebras have never been truly domesticated.</p>
			</div>
		</CompoundPanels>
	)
}

export default App
