import React from 'react'
import { BsFillEnvelopeFill, BsFillChatLeftTextFill } from 'react-icons/bs'

export const Label = ({ textClasses, bgClasses, iconClasses }) => {
	return (
		<h1
			className={`text-white font-bold tracking-wide font-mono ${textClasses}`}>
			Quick
			<span className={`bg-teal-300 text-white px-2 relative ${bgClasses}`}>
				Messenger
				<BsFillChatLeftTextFill
					className={`absolute fill-teal-300 ${iconClasses}`}
				/>
			</span>
		</h1>
	)
}

export const Icon = ({ iconClasses }) => (
	<BsFillEnvelopeFill className={`fill-teal-300 ${iconClasses}`} />
)

const FullLogo = ({ labelClasses, iconClasses }) => {
	return (
		<>
			<Icon iconClasses={iconClasses} />
			<Label {...labelClasses} />
		</>
	)
}

export default FullLogo
