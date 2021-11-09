import { atom } from 'recoil'
import { Matches } from '../models/Matches'

const MatchObjects = atom<Matches[]>({
    key: 'matchObject',
	default:[{id: '', winnerId: '', loserId: ''}]
})

export default MatchObjects