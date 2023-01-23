import React from 'react'
import MessageItem from '../MessageItem';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useEffect } from 'react';

const MessagesList = ({chanel}) => {
    const [messages, setMessages] = useState([])

    // useEffect(() => {
    //     const newMessages = getMessages()
    //     setMessages(newMessages)
    // }, [])

    const getMessages = async () => {
    }

    const renderedItems = messages.map((props, i) => {
    const isLastInRow = !!props.isAuthor !== !!messages[i + 1]?.isAuthor || i + 1 >= messages.length
    return <MessageItem key={props.id} {...props} isLastInRow={isLastInRow}/>
})

    return (<div class="MessagesList mt-auto">
        {messages.length ? renderedItems : 'no messages'}
    </div>)
}

export default MessagesList