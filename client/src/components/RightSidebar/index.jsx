import React from 'react'
import Header from './Header'
import MessagesList from './MessagesList'

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
		<div class={`rightSidebar sm:w-3/5 lg:w-3/4 bg-sky-300 ${hiddenClasses}`}>
			{chanel && (
				<Header
					chanel={chanel}
					setChanel={setSelectedChanelId}
					withBackIcon={breakpoint === 'mobile'}
				/>
			)}
			{chanel && <MessagesList />}
		</div>
	)
}

export default RightSidebar
