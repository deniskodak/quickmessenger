import React, { useEffect } from 'react'
import ChanelItem from '../ChanelItem'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allChannels, user } from '../../../store/atom'
import { getUserChats } from '../../../api/database'
import { useAsyncWrapper } from '../../../utils/hooks'

const ChanelList = () => {
	const [channels, setChannels] = useRecoilState(allChannels)
	const currentUser = useRecoilValue(user)
	const [_, isLoading] = useAsyncWrapper({
		method: getUserChats,
		params: currentUser.uid,
		updateState: setChannels,
	})

	const renderedChanelItems = channels.map((props, i) => (
		<ChanelItem key={props.name + i} {...props} />
	))

	return <div className="">{isLoading ? null : renderedChanelItems}</div>
}

export default ChanelList
