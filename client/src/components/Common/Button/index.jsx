import React from 'react'
import { background, textColor, transition } from '../../../Styles'

const Button = ({ title, onClick, icon, className }) => {
	const bgClasses = `${background.coloredBtnDefault} ${background.coloredBtnHover} ${background.coloredBtnFocus} ${background.coloredBtnActive}`
	return (
		<button
			onClick={onClick}
			className={`inline-flex items-center rounded-lg border-2 border-slate-300 hover:border-teal-300 focus:border-teal-300 px-4 py-1 font-bold outline-none ${bgClasses} ${textColor.button} ${transition.color} ${textColor.buttonHover} ${textColor.buttonFocus} ${className}`}>
			{title}
			{icon ? icon : null}
		</button>
	)
}

export default Button
