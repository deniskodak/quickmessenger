import { atom } from 'recoil'
import { selectedChanelKey, allChannelsKeys, userKey } from './keys'

export const selectedChanel = atom({
	key: selectedChanelKey,
	default: null,
})

export const allChannels = atom({
	key: allChannelsKeys,
	default: [],
})

export const user = atom({
	key: userKey,
	default: null,
})
