import React from 'react'
import PropTypes from 'prop-types'

export function ColorBoxes04(props) {
	const c = props.color || ['red', 'orange', 'green', 'yellow', 'blue'];
	const t = props.title || 'Hello from ColorBox04';
	return (
    <>
    <h1>{t}</h1>
	<div className="FlexWrap">
		{c?.includes('red') && <div className="FlexItem Red">Red box with nr: {props.number}</div>}
		{c?.includes('orange') && <div className="FlexItem Orange">Orange box with nr: {props.number}</div>}
		{c?.includes('green') && <div className="FlexItem Green">Green box with nr: {props.number}</div>}
		{c?.includes('yellow') && <div className="FlexItem Yellow">Yellow box with nr: {props.number}</div>}
		{c?.includes('blue') && <div className="FlexItem Blue">Blue box with nr: {props.number}</div>}
		{c?.includes('red') && <div className="FlexItem Red">Red box with nr: {props.number}</div>}
		{c?.includes('orange') && <div className="FlexItem Orange">Orange box with nr: {props.number}</div>}
		{c?.includes('green') && <div className="FlexItem Green">Green box with nr: {props.number}</div>}
		{c?.includes('yellow') && <div className="FlexItem Yellow">Yellow box with nr: {props.number}</div>}
		{c?.includes('blue') && <div className="FlexItem Blue">Blue box with nr: {props.number}</div>}
	  </div>
    </> )
}


ColorBoxes04.propTypes = {
	title: PropTypes.string,
	color: PropTypes.array,
	number: PropTypes.number.isRequired
};

