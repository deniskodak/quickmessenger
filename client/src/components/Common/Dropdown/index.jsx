import React, { useState, useMemo, useRef, useCallback } from 'react'
import Button from '../Button'
import { useOnClickOutside } from '../../../utils/hooks'

const ListOption = ({ label, onClick, value }) => {
	const handleClick = () => onClick(value)
	return (
		<li
			onClick={handleClick}
			className="py-1 text-sm text-center cursor-pointer hover:underline text-slate-400 hover:text-teal-400 active:text-teal-500">
			{label}
		</li>
	)
}

const Dropdown = ({ title, icon, options, buttonClassName }) => {
	const [isDropdownShown, setIsDropdownShown] = useState(false)
	const ref = useRef(null)

	const handleCloseDropdown = useCallback(() => setIsDropdownShown(false), [])
    const handleToggleDropdown = () => setIsDropdownShown((prev) => !prev)
	useOnClickOutside(ref, handleCloseDropdown)
	
	const renderedOptions = useMemo(() => {
		return options.map((option) => (
			<ListOption key={option.key} {...option} />
		))
	}, [JSON.stringify(options)])

	return (
		<div className="relative" ref={ref}>
			<Button
				className={buttonClassName}
				onClick={handleToggleDropdown}
				title={title}
				icon={icon}
			/>

			{isDropdownShown && (
				<ul className="absolute mt-1 border border-slate-300 rounded-sm bg-white w-40 px-4 py-1 shadow-md shadow-slate-300">
					{renderedOptions}
				</ul>
			)}
		</div>
	)
}

export default Dropdown
