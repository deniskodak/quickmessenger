import React from 'react'
import FullLogo from '../Logo'

const Header = () => {
	const labelClasses = {
		textClasses: 'text-xl',
		bgClasses: 'rounded-lg',
		iconClasses: 'h-3 w-3 -right-2 -top-2',
	}

	const iconClasses = 'h-8 w-8 mr-auto'

	return (
		<div className="flex px-4 py-2 items-center border border-b-slate-300">
			<FullLogo iconClasses={iconClasses} labelClasses={labelClasses} />
		</div>
	)
}

export default Header
