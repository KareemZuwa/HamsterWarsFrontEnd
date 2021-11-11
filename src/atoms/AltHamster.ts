import { atom } from 'recoil'
import { Hamster } from '../models/Hamster'

const althamsters = atom<Hamster[] | null>({
    key: 'althamsters',
	default: null
})

export default althamsters