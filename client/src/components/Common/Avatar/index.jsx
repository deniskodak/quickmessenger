import React from 'react'
import {generateLinear} from '../../../utils/randomColor'

import './index.scss'

const MAX_LETTER_AMOUNT = 2

const Avatar = ({name, img, large = true, background}) => {
    const label = name.length && !img ? name.split(' ').map(word => word[0].toUpperCase()).join('').slice(0,MAX_LETTER_AMOUNT) : ''
    const size = large ? 16 : 11
    const additionalStyles = img ? {} : { style: {background: background ? background : generateLinear()}}

    return <div className={`w-${size} h-${size} avatar rounded-full text-lg font-bold	text-white flex items-center justify-center min-w-min`} {...additionalStyles}>{label}</div>
}

export default Avatar