import {useEffect, useState } from 'react'
import { Hamster } from '../../models/Hamster'
import Winners from './Winners'
import Losers from './Losers'
import './Stats.css'

const Stats = () => {
    const [winners, setWinners] = useState<Hamster[]>([])
    const [losers, setLosers] = useState<Hamster[]>([])

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/winners')
            const dataMatches = await response.json()
            setWinners(dataMatches)
        }
        sendRequest()
	}, [setWinners])
    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/losers')
            const dataMatches = await response.json()
            setLosers(dataMatches)
        }
        sendRequest()
	}, [setLosers])

    console.log(winners)
    console.log(losers)

    return (
        <div>

            <h2>STATISTIK</h2>
            <div className='stats-container'>
                
            <section className='winner-section'>
                <h3>Top 5 vinnare</h3>
                    {winners?
                    winners.map( winners=> (
                        <Winners key={winners.id} winners={winners}/>
                    )): <h3>Hämtar vinnare</h3>
                    }
            </section>

            <section className='loser-section'>
                <h3>Top 5 förlorare</h3>

                {losers?
                    losers.map( losers=> (
                        <Losers key={losers.id} losers={losers}/>
                    )): <h3>Hämtar förlorare</h3>
                    }
            </section>

            </div>
            
               
        </div>
    )
}

export default Stats
