import React from 'react'
import PropTypes from 'prop-types'

import CompPanel from './comp-panel'
import './compound-panels.scss'

class CompoundPanels extends React.Component {
	/* Accordion = One, and only one, panel is expanded at all times.
	independent = Individual collapsible panels. Not restrictions on which can be open or closed.
	collapsibleAccordion = Like accordion, but possible to collapse all the panels. */
	constructor (props) {
		super(props)
		this.state = {
			panelsType: props.panelsType,
			activePanels: props.activePanels
		}
		this.togglePanel = this.togglePanel.bind(this)
	}

	render () {
		if (!this.props.children) {
			return null // Render nothing if there are no panels.
		}
		return (
			<ul className='compound-panels'>
				{this.compPanels}
			</ul>
		)
	}

	componentWillMount () {
		this.generatePanels()
	}

	componentWillUpdate (nextProps, nextState) {
		this.generatePanels(nextProps, nextState)
	}

	generatePanels (nextProps = this.props, nextState = this.state) {
		this.compPanels = React.Children.map(nextProps.children, (panel, idx) => {
			return (
				<CompPanel
					title={panel.props.title}
					uniqueId={String(idx)}
					key={idx}
					isActive={nextState.activePanels.includes(idx)}
					togglePanel={this.togglePanel}
				>
					{panel.props.children}
				</CompPanel>
			)
		})
	}

	togglePanel (panelIndex) {
		panelIndex = parseInt(panelIndex, 10)
		const isClosed = !this.state.activePanels.includes(panelIndex)
		if (
			this.state.panelsType === 'accordion' ||
			(this.state.panelsType === 'collapsibleAccordion' && isClosed)
		) {
			// Replace activePanels
			this.setState({ activePanels: [panelIndex] })
		} else if (isClosed) {
			// Add to activePanels
			this.setState({ activePanels: [...this.state.activePanels, panelIndex] })
		} else {
			this.setState({
				// Remove from activePanels
				activePanels: this.state.activePanels.filter(item => item !== panelIndex) || []
			})
		}
	}
}

CompoundPanels.propTypes = {
	children: PropTypes.node,
	panelsType: PropTypes.string,
	activePanels: PropTypes.array
}

CompoundPanels.defaultProps = {
	panelsType: 'accordion',
	activePanels: [0]
}

export default CompoundPanels
