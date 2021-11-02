import { useEffect, useState } from 'react'
import { Hamster } from '../../models/Hamster'

const RandomHamster = () => {
    const [data, setData] = useState<Hamster[] | null>(null)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters/random')
            const randomHamster = await response.json()
            setData(randomHamster)
        }
        sendRequest()
	}, [])

    console.log(data)

    return (
        <div className="random-hamster-1">
    
        </div>
    )
}

export default RandomHamster
