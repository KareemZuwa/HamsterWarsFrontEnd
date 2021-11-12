import { atom } from 'recoil'
import { Hamster } from '../models/Hamster'

const matchWinner = atom<Hamster[] | null>({
    key: 'matchWinner',
	default: null
})

export default matchWinner