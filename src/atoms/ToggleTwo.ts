import { atom } from 'recoil'

const ToggleTwo = atom<boolean>({
    key: 'toggle',
	default: true
})

export default ToggleTwo