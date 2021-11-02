import { useState, useEffect } from 'react'
import { Matches } from '../../models/Matches'
import './History.css'

const History = () => {
    const [matchHistory, setMatchHistory]= useState<Matches[] | null>(null)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/matches')
            const dataMatches = await response.json()
            setMatchHistory(dataMatches)
        }
        sendRequest()
	}, [])

    console.log(matchHistory)

    return (
        <div>
            <h2>Lista på matcher</h2>
            {
                matchHistory ?
                matchHistory.map(match=> (
                    <div className="match-card" key={match.id}>
                    <h3>Winner: {match.winnerId}</h3>
                    <h3>Loser: {match.loserId}</h3>
                    </div>
                ))
            : null
            }

            
        </div>
    )
}

export default History
