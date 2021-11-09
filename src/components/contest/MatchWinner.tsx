import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import atomToggle from '../../atoms/Toggle'
import atomMatches from '../../atoms/MatchObject'
import atomHamsters from '../../atoms/Hamsters'
import atomMatchId from '../../atoms/MatchId'
import './MatchWinner.css'

const MatchWinner = () => {
    const [toggle,setToggle] = useRecoilState(atomToggle)
    const [hamstersArray] = useRecoilState(atomHamsters)
    const [matches,setMatches] = useRecoilState(atomMatches)
    const [matchId] = useRecoilState(atomMatchId)
    console.log('This is hamster objects', hamstersArray)
    console.log('This is matches objects' , matches)
    console.log('This is match id: ', matchId)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/matches')
            const matchData = await response.json() 
            setMatches(matchData)
        }
        sendRequest()
	}, [setMatches])

    const getMatchesWinnerId = matches.filter(matches => matches.id === matchId);
    console.log(getMatchesWinnerId)


    return (
        <div className="match-winner">

            <h1>Matchvinnare och förlorare</h1>


            <button onClick={()=>setToggle(!toggle)}className="new-fight-button"> NY FIGHT </button>
        </div>
    )
}

export default MatchWinner
