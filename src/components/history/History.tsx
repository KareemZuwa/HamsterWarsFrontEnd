import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Matches } from '../../models/Matches'
import atomHamsters from '../../atoms/Hamsters'
import './History.css'

const History = () => {
    const [matchObj,setMatchObj] = useState<Matches[]>([])
    const [hamstersArray,setHamstersArray] = useRecoilState(atomHamsters)

    console.log(matchObj)

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
            <div className="history-wrapper">
                {matchObj ?
                    matchObj.map(match => (
                        <section className="match-wrapper"key={match.id} >
                            {/* <button>Delete</button> */}
                            {
                                hamstersArray?.map(hamster => {
                                    if (hamster.id === match.winnerId) {
                                        return (
                                            <div key={match.winnerId}>
                                                <h1>Winner</h1>
                                                {hamster.imgName.startsWith('http') ?
                                                    <img src={hamster.imgName} alt={hamster.name} height="50" width="50" />
                                                    :
                                                    <img src={`/img/${hamster.imgName}`} alt={hamster.name} height="50" width="50" />
                                                }
                                                <h2>{hamster.name}</h2>
                                            </div>
                                        )
                                    }
                                    if (hamster.id === match.loserId) {
                                        return (
                                            <div key={match.loserId}>
                                                <h1>Loser</h1>
                                                {hamster.imgName.startsWith('http') ?
                                                    <img src={hamster.imgName} alt={hamster.name} height="50" width="50" />
                                                    :
                                                    <img src={`/img/${hamster.imgName}`} alt={hamster.name} height="50" width="50" />
                                                }
                                                <h2>{hamster.name}</h2>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }
                        </section>
                    ))
                    : <div>Loading...</div>}
            </div>

            
        </div>
    )
}

export default History
