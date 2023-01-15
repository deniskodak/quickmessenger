import React, { useState } from 'react'
import ChanelItem from '../ChanelItem'
import dayjs from 'dayjs'
import {
    useRecoilState,
  } from 'recoil';
import {allChannels} from '../../../store/atom'
import { useEffect } from 'react';

const mockedData = [
    {
        name: 'testName',
        lastMessage: 'test last message',
        image: null,
        lastMessageTime: dayjs().format('HH:mm a'),
        id: 'testid1',
        background: 'linear-gradient(360deg, rgb(7, 178, 46), rgb(216, 226, 240))'
    },
    {
        name: 'test Name1',
        lastMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, odit libero ipsa sunt repellendus earum voluptas quidem laborum quod, illo nisi consectetur iure, necessitatibus fuga! Deserunt quidem laborum ipsa obcaecati?',
        image: null,
        lastMessageTime: dayjs().format('HH:mm a'),
        id: 'testid2',
        background: 'linear-gradient(360deg, rgb(116, 64, 232), rgb(234, 112, 209))'
    },
    {
        name: 'super mega long name test',
        lastMessage: 'test last message',
        image: null,
        lastMessageTime: dayjs().format('HH:mm a'),
        id: 'testid3',
        background: 'linear-gradient(360deg, rgb(124, 80, 225), rgb(243, 23, 15))',
    },
    {
        name: 'testName3',
        lastMessage: 'test last message',
        image: null,
        lastMessageTime: dayjs().format('HH:mm a'),
        id: 'testid4',
        background: 'linear-gradient(360deg, rgb(13, 61, 184), rgb(4, 82, 246))',
    },
]

const ChanelList = () => {
	const [channels, setChannels] = useRecoilState(allChannels)
    const [isLoading, setIsLoading] = useState(false)

    const loadChannels = async() => {
        setIsLoading(true)
        try {
            const channels = await new Promise((res,rej) => res(mockedData))
            setChannels(channels)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadChannels()
    }, [])

    const renderedChanelItems = channels.map((props, i) => <ChanelItem key={props.name + i} {...props} />)

	return (
		<div className="">
            {isLoading ? null : renderedChanelItems}
		</div>
	)
}

export default ChanelList
