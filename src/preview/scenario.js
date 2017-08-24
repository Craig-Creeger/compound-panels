import React from 'react'

class Scenario extends React.Component {
	constructor (props) {
		super(props)

		/**
		 * The current scenario is always read off the URL’s query params. So, this function will:
		 *   1. Convert the query params into an object.
		 *   2. Set-up the page for the scenario
		 */

		// Set scenario based on the URL.
		this.scenario = getScenario()

		// Compound Panel Type
		if (typeof this.scenario.compPanel === 'undefined') {
			this.scenario.compPanel = localStorage.getItem('compPanel') || 'accordion'
		}
		localStorage.setItem('compPanel', this.scenario.compPanel)
	}

	render () {
		return (
			<div style={{ margin: '2em' }}>
				<p style={{ fontSize: 'larger', fontWeight: 'bold' }}>Scenarios</p>
				<form
					id='scenarios'
					onSubmit={() => false}
					ref={elem => {
						this.scenarioForm = elem
					}}
				>
					<fieldset>
						<legend>Compound Panel Type</legend>
						<label htmlFor='compPanelAccordion'>
							<input
								type='radio'
								id='compPanelAccordion'
								name='compPanel'
								value='accordion'
								onClick={this.handleNewScenario.bind(this)}
								defaultChecked={this.scenario.compPanel === 'accordion'}
							/>{' '}
							Standard accordion panel (one panel is always visible)
						</label>
						<br />
						<label htmlFor='collapsibleAccordion'>
							<input
								type='radio'
								id='collapsibleAccordion'
								name='compPanel'
								value='collapsibleAccordion'
								onClick={this.handleNewScenario.bind(this)}
								defaultChecked={this.scenario.compPanel === 'collapsibleAccordion'}
							/>{' '}
							Collapsible accordion panel (it is possible to close all panels)
						</label>
						<br />
						<label htmlFor='independent'>
							<input
								type='radio'
								id='independent'
								name='compPanel'
								value='independent'
								onClick={this.handleNewScenario.bind(this)}
								defaultChecked={this.scenario.compPanel === 'independent'}
							/>{' '}
							Series of independent panels
						</label>
					</fieldset>
				</form>
			</div>
		)
	}

	handleNewScenario () {
		/**
		 * Switching scenarios is just reloading the current page with a different set of query params
		 * on the URL.
		 */
		const compPanel = this.scenarioForm.compPanel.value.toString()
		window.location.href = `${window.location
			.origin}?compPanel=${compPanel}`
	}
}

export default Scenario

function getScenario () {
	const scenario = {}

	const compPanel = getParameterByName('compPanel')
	if (compPanel) {
		scenario.compPanel = compPanel
	}
	return scenario
}

function getParameterByName (name, url) {
	if (!url) url = window.location.href
	name = name.replace(/[[\]]/g, '\\$&')
	const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
		results = regex.exec(url)
	if (!results) return null
	if (!results[2]) return ''
	return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
