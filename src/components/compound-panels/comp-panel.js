import React from 'react'
import PropTypes from 'prop-types'

const CompPanel = ({ children, uniqueId, title, isActive, height }) => {
	return (
		<li className='compound-panels__panel'>
			<button id={`cpb_${uniqueId}`} aria-expanded={isActive} className='compound-panels__title'>
				{title}
			</button>
			<div
				aria-labelledby={`cpb_${uniqueId}`}
				style={{ height: height }}
				className='compound-panels__content'
			>
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
	height: PropTypes.string.isRequired
}

export default CompPanel
