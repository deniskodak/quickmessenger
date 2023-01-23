import React, { useState, useMemo, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { GiHamburgerMenu } from 'react-icons/gi'

import Input from '../../Common/Input'
import Dropdown from '../../Common/Dropdown'
import { logOut } from '../../../api/auth'
import { asyncWrapper } from '../../../utils/share'
import { user } from '../../../store/atom'

const Header = () => {
	const [search, setSearch] = useState('')
	const [, setUserData] = useRecoilState(user)

	const handleChangeInput = ({ value }) => {
		setSearch(value)
	}

	const handleLogout = useCallback(async () => {
		await asyncWrapper(logOut)
		setUserData(null)
	}, [setUserData])

	const dropdownOptions = useMemo(() => {
		return [
			{
				key: 'logout',
				label: 'Logout',
				onClick: handleLogout,
			},
		]
	}, [handleLogout])

	return (
		<div className="flex p-2 justify-start">
			<Dropdown
				buttonClassName="rounded-full mr-2 py-2 mr-4"
				icon={<GiHamburgerMenu className="w-6 w-6 mx-auto" />}
				options={dropdownOptions ?? []}
			/>
			<Input
				value={search}
				onChange={handleChangeInput}
				additionalLabelClasses="grow"
				additionalWindClasses="w-full text-slate-400"
			/>
		</div>
	)
}

export default Header
