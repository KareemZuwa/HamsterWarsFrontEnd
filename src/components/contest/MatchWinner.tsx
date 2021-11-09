import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import atomToggle from '../../atoms/Toggle'
import atomMatches from '../../atoms/MatchObject'
import atomHamsters from '../../atoms/Hamsters'
import atomMatchId from '../../atoms/MatchId'
import './MatchWinner.css'
// import { Matches } from '../../models/Matches'

const MatchWinner = () => {
    const [toggle,setToggle] = useRecoilState(atomToggle)
    const [hamstersArray] = useRecoilState(atomHamsters)
    const [matches,setMatches] = useRecoilState(atomMatches)
    const [matchId] = useRecoilState(atomMatchId)
    console.log('This is hamster objects', hamstersArray)
    console.log('This is match id: ', matchId)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/matches')
            const matchData = await response.json() 
            setMatches(matchData)
        }
        sendRequest()
	}, [setMatches])
    
    //Hitta matchobjektet
    const findRightMatch = matches.filter(match => match.id === matchId.id)
    const findWinnerLoser = findRightMatch.find(object=> object.winnerId)
    //Dela upp vinnare och förlorare
    const findWinnerHamster = hamstersArray.find(winner=> winner.id === findWinnerLoser?.winnerId)
    const findLoserHamster = hamstersArray.find(loser=> loser.id === findWinnerLoser?.loserId)
    console.log(findWinnerHamster)

    return (
        <div className="match-winner">
            <section>
                {findWinnerHamster ? (
                    <article>
                            <img src={'/img/' + findWinnerHamster.imgName} alt={findWinnerHamster.name}/>
                            <h1>{findWinnerHamster.name} Vann =)</h1>
                            <p>Vinster: {findWinnerHamster.wins +1} , Förluster: {findWinnerHamster.defeats}</p>
                    </article>
                ): null}
                {findLoserHamster ? 
                    <article>
                            <img src={'/img/' + findLoserHamster.imgName} alt={findLoserHamster.name}/>
                            <h1>{findLoserHamster.name} förlorade =(</h1>
                            <p>Vinster: {findLoserHamster.wins} , Förluster: {findLoserHamster.defeats +1}</p>
                    </article>
                :null}
            </section>

            <button onClick={()=>setToggle(!toggle)}className="new-fight-button"> NY FIGHT </button>
        </div>
    )
}

export default MatchWinner
