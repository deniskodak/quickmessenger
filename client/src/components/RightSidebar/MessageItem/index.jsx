import React from 'react'

import './index.scss'

const MessageItem = ({message, time, id, isAuthor, isLastInRow}) => {

    const messageClasses = isAuthor ? 'rounded-tr-xl rounded-tl-2xl rounded-bl-2xl bg-sky-200 author ml-auto' : 'rounded-tl-xl rounded-tr-2xl rounded-br-2xl bg-white mr-auto'
    const arrowClasses = isLastInRow ? 'with-arrow' : ''

    return (<div className={`w-fit max-w-[85%] bg-slate-50 my-4 p-2 ${messageClasses} ${arrowClasses}`}><p>{message}</p><span>{time}</span></div>)
}

export default MessageItem