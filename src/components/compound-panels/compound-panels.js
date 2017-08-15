import React from 'react'
import PropTypes from 'prop-types'

import CompPanel from './comp-panel'
import './compound-panels.scss'

class CompoundPanels extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			activePanels: props.activePanels
		}
		this.generatePanels(this.props, this.state)
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

	generatePanels (props, state) {
		this.compPanels = React.Children.map(props.children, (panel, idx) => {
			return (
				<CompPanel
					title={panel.props.title}
					uniqueId={String(idx)}
					key={idx}
					isActive={state.activePanels.includes(idx)}
					height={panel.props.height}
				>
					{panel.props.children}
				</CompPanel>
			)
		})
	}
}

CompoundPanels.propTypes = {
	children: PropTypes.node,
	panelsType: PropTypes.string,
	activePanels: PropTypes.array
}

CompoundPanels.defaultProps = {
	activePanels: [0]
}

export default CompoundPanels
