import React from 'react'
import MessageItem from '../MessageItem';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useEffect } from 'react';

const MessagesList = ({chanel}) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const newMessages = getMessages()
        setMessages(newMessages)
    }, [])

    const getMessages = async () => {
        const messages = await new Promise((res,rej) => res([{id: 'testid1', isAuthor: true, message: "Quaerat totam aliquid beatae temporibus odio atque, facere molestiae natus ipsa. Fugiat rerum, ducimus nobis quo debitis at. Quos et ipsam ullam.", time: dayjs().format('HH:mm A') }, 
        {id: 'testid2', isAuthor: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat totam aliquid beatae temporibus odio atque, facere molestiae natus ipsa. Fugiat rerum, ducimus nobis quo debitis at. Quos et ipsam ullam.", time: dayjs().format('HH:mm A') }, 
        {id: 'testid3', isAuthor: false, message: "Lorem ipsum.", time: dayjs().format('HH:mm A') }]))
        setMessages(messages)
    }

    const renderedItems = messages.map((props, i) => {
    const isLastInRow = !!props.isAuthor !== !!messages[i + 1]?.isAuthor || i + 1 >= messages.length
    return <MessageItem key={props.id} {...props} isLastInRow={isLastInRow}/>
})

    return (<div class="MessagesList w-3/4 mx-auto">
        {messages.length ? renderedItems : 'no messages'}
    </div>)
}

export default MessagesList