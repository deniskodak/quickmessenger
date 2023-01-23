import React from 'react'
import Header from './Header'
import MessagesList from './MessagesList'
import MessageCreator from './MessageCreator'

import { allChannels, selectedChanel } from '../../store/atom'
import { useRecoilValue, useRecoilState } from 'recoil'

import './index.scss'

const RightSidebar = ({ isRightShown, breakpoint }) => {
	const channels = useRecoilValue(allChannels)
	const [selectedChanelId, setSelectedChanelId] =
		useRecoilState(selectedChanel)
	const chanel = channels.find(({ id }) => id === selectedChanelId)

	const hiddenClasses = isRightShown ? 'w-screen' : 'w-0'

	return (
		<div class={`rightSidebar relative px-6 md:px-8 lg:px-12 pt-14 pb-24 sm:w-3/5 lg:w-3/4 bg-sky-300 ${hiddenClasses}`}>
			{chanel && (
				<Header
					chanel={chanel}
					setChanel={setSelectedChanelId}
					withBackIcon={breakpoint === 'mobile'}
				/>
			)}
			{chanel && <MessagesList />}
			{chanel && <MessageCreator id={chanel.id}/>}
		</div>
	)
}

export default RightSidebar
