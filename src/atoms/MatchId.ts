import { atom } from 'recoil'
import { MatchId } from '../models/MatchId'

const MatchIdObject = atom<MatchId>({
    key: 'matchObjectId',
	default: ''
})

export default MatchIdObject