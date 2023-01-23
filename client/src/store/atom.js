import { atom } from 'recoil'
import { selectedChanelKey, allChannelsKeys, userKey } from './keys'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

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
	effects_UNSTABLE: [persistAtom],
})
