import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Input from '../../Common/Input'

const Header = () => {
	return (
		<div className="flex p-2">
			<button className="rounded-full mr-2 w-10 h-10 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-200">
				<GiHamburgerMenu className="w-6 w-6 mx-auto" />
			</button>
			<Input additionalWindClasses="w-4/5"/>
		</div>
	)
}

export default Header
