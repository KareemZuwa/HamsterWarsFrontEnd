import {useEffect, useState } from 'react'
import { Hamster } from '../../models/Hamster'

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
            
        </div>
    )
}

export default Stats
