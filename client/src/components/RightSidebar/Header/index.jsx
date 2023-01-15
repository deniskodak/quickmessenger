import React from 'react'
import Avatar from '../../Common/Avatar'
import { BiArrowBack } from 'react-icons/bi'

const Header = ({ chanel, setChanel, withBackIcon }) => {
	const handleResetSelectedChanel = () => setChanel(null)

	return (
		<div className="flex bg-white border py-2 px-4">
			{withBackIcon && <BiArrowBack onClick={handleResetSelectedChanel} />}
			<Avatar
				large={false}
				name={chanel.name}
				img={chanel.img}
				background={chanel.background}
			/>
			<p className="ml-2 font-semibold text-slate-800">{chanel.name}</p>
		</div>
	)
}

export default Header
