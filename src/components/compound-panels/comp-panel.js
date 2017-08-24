import React from 'react'
import PropTypes from 'prop-types'

const CompPanel = ({ children, uniqueId, title, isActive, togglePanel }) => {
	const _toggle = () => {
		togglePanel(uniqueId)
	}
	return (
		<li className='compound-panels__panel'>
			<button
				id={`cpb_${uniqueId}`}
				aria-expanded={isActive}
				className='compound-panels__title'
				onClick={_toggle}
			>
				{title}
			</button>
			<div aria-labelledby={`cpb_${uniqueId}`} style={{ overflow: 'hidden' }}>
				{children}
			</div>
		</li>
	)
}

CompPanel.propTypes = {
	children: PropTypes.node.isRequired,
	uniqueId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	togglePanel: PropTypes.func.isRequired
}

export default CompPanel
