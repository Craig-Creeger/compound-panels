export default class CompoundPanels {
	constructor (animationTime) {
		this.animationTime = animationTime
		this.activePanels = this.initializeActivePanels()
		document
			.querySelector('.compound-panels')
			.addEventListener('click', this.bubbleCompoundPanel.bind(this))
	}

	bubbleCompoundPanel (evt) {
		if (evt.target && evt.target.matches('button.compound-panels__title')) {
			this.toggleCompoundPanel(this.extractIndex(evt.target))
		}
	}

	toggleCompoundPanel (idx) {
		idx = parseInt(idx, 10)
		this.activePanels = this.activePanels.includes(idx) ? [] : [idx]
		this.renderPanels(this.activePanels)
	}

	renderPanels (activePanels) {
		const panels = document.querySelectorAll('.compound-panels__title')
		panels.forEach((elem, idx) => {
			const isOpen = activePanels.includes(idx)
			const elemContent = elem.parentNode.querySelector('.compound-panels__content')

			if (isOpen) this.removeClass(elemContent, 'hidden')
			setTimeout(() => {
				elem.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
				if (!isOpen) {
					setTimeout(() => {
						this.addClass(elemContent, 'hidden')
					}, this.animationTime)
				}
			}, 0)
		})
	}

	addClass (elem, newClass) {
		if (elem.classList) elem.classList.add(newClass)
		else elem.className += ' ' + newClass
	}

	removeClass (elem, killClass) {
		if (elem.classList) elem.classList.remove(killClass)
		else
			elem.className = elem.className.replace(
				new RegExp('(^|\\b)' + killClass.split(' ').join('|') + '(\\b|$)', 'gi'),
				' '
			)
	}

	extractIndex (elem) {
		const id = elem && elem.id
		return id.substring(id.indexOf('_') + 1)
	}

	initializeActivePanels () {
		const panels = document.querySelectorAll('.compound-panels__title')
		const activePanels = []
		panels.forEach((elem, idx) => {
			if (elem.getAttribute('aria-expanded') === 'true') {
				activePanels.push(parseInt(idx, 10))
			}
		})
		return activePanels
	}
}
