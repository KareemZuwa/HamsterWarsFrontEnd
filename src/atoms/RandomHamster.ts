import { atom } from 'recoil'
import { Hamster } from '../models/Hamster'

const RandomHamsterState = atom<Hamster[]>({
    key: 'Randomhamsters',
	default:[{ name: '', id: '', age: 0, loves: '', favFood: '', wins: 0, defeats: 0, imgName: '' , games: 0}]
})

export default RandomHamsterState