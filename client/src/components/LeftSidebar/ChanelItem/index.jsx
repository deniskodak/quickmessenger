import React from 'react'
import Avatar from '../../Common/Avatar'
import {
    useRecoilState,
  } from 'recoil';
import {selectedChanel} from '../../../store/atom'

const OVERFLOW_CLASSES = 'text-ellipsis whitespace-nowrap overflow-hidden'

const ChanelItem = ({lastMessage, lastMessageTime, title, img, id, background}) => {
	const [chanel, setChanel] = useRecoilState(selectedChanel)
    const isSelected = id === chanel

    const textColorClasses = {
        name: isSelected ? 'text-white' : 'text-slate-800',
        time: isSelected ? 'text-white' : 'text-slate-500',
        message: isSelected ? 'text-white' : 'text-slate-600',
    }
    const backgroundClasses = isSelected ? 'bg-sky-500' : 'bg-white	hover:bg-slate-100 active:bg-slate-200'

    const handleClick = () => setChanel(id)

	return (
		<li className={`flex w-full items-center py-2 cursor-pointer rounded-lg px-2 ${backgroundClasses}`} onClick={handleClick}>
			<Avatar name={title} img={img} background={background}/>
            <div className="flex grow flex-wrap ml-2 text-base overflow-hidden">
			<div className="w-full flex flex-nowrap justify-between overflow-hidden">
            <p className={`mr-2 font-semibold ${textColorClasses.name} ${OVERFLOW_CLASSES}`}>{title}</p>
			<p className={`text-sm whitespace-nowrap ${textColorClasses.time}`}>{lastMessageTime}</p>
            </div>
			<p className={`basis-full mt-2 ${textColorClasses.message} ${OVERFLOW_CLASSES}`}>{lastMessage}</p>
            </div>
		</li>
	)
}

export default ChanelItem
