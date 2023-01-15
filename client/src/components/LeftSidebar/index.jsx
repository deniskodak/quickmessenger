import React from 'react'
import Header from './Header'
import ChanelList from './ChanelList'

const LeftSidebar = ({isLeftShown}) => {

	const hiddenClasses = isLeftShown ? 'w-screen px-2' : 'w-0 p-0'

	return (
		<div className={`sm:w-2/5 lg:w-1/4 ${hiddenClasses}`}>
			<Header />
            <ChanelList />
		</div>
	)
}

export default LeftSidebar
