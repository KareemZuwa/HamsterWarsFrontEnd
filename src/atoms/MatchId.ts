import { atom } from 'recoil'
import { Matches } from '../models/Matches'

const MatchIdObject = atom<Matches>({
    key: 'matchObjectId',
	default: {id:'', loserId: '', winnerId: ''}
})

export default MatchIdObject