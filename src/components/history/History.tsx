import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Matches } from '../../models/Matches'
import atomHamsters from '../../atoms/Hamsters'
import './History.css'

const History = () => {
    const [matchObj,setMatchObj] = useState<Matches[]>([])
    const [hamstersArray,setHamstersArray] = useRecoilState(atomHamsters)

    //fetches
    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/matches')
            const dataMatches = await response.json()
            setMatchObj(dataMatches)
        }
        sendRequest()
	}, [setMatchObj])
    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const dataHamster = await response.json() 
            setHamstersArray(dataHamster)
        }
        sendRequest()
	},[setHamstersArray])

    return (
        <div>
            <h2>HISTORIK</h2>

            {matchObj? 
            matchObj.map(match => {
                return (
                    <div>
                        <div key={match.id}>{match.id}</div>
                        {hamstersArray?.map(hamster =>  {
                            if(hamster.id === match.winnerId) {
                                <p>{hamster.name}</p>

                            }
                        })}
                    </div>

                )
            })
            :null}
            {/* /* {
                matchObj ?
                matchObj.map(match=> (
                    <div className="match-card" key={match.id}>
                    <h2>Winner: {match.winnerId}</h2>
                    <h2>VS</h2>
                    <h2>Loser: {match.loserId}</h2>
                    </div>
                ))
            : null
            } */}

            
        </div>
    )
}

export default History
