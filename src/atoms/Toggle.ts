import { atom } from 'recoil'

const toggle = atom<boolean>({
    key: 'toggle',
	default: false
})

export default toggle