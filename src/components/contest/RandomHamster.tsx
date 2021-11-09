import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import atomToggle from '../../atoms/Toggle'
import atomHamsters from '../../atoms/Hamsters'
import atomMatchId from '../../atoms/MatchId'
import { Hamster } from '../../models/Hamster'
import handleLosingHamster from '../../modules/LosingHamster'
import handleWinHamster from '../../modules/WinnerHamster'
import MatchWinner from './MatchWinner'
import './Contest.css'

const RandomHamster = () => {
     const [hamstersArray, setHamstersArray] = useRecoilState(atomHamsters)
     const [toggle,setToggle] = useRecoilState(atomToggle)
     const [matchId, setMatchId] = useRecoilState(atomMatchId)

    //Random på två hamstrar
    const randomHamster1: Hamster = hamstersArray[Math.floor(Math.random()*hamstersArray.length)];
    //Slumpa hamster 2
    const randomHamster2: Hamster = hamstersArray[Math.floor(Math.random()*hamstersArray.length)];
    const noDoubles = (hamsterTwo:Hamster)=> {
        while(hamsterTwo.id === randomHamster1.id) {
            let randomHamster2: Hamster = hamstersArray[Math.floor(Math.random()*hamstersArray.length)];
            return randomHamster2
        }
    }
    noDoubles(randomHamster2);

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const dataHamster = await response.json() 
            setHamstersArray(dataHamster)
        }
        sendRequest()
	},[setHamstersArray])

    const matchObjectOne = { winnerId: randomHamster1.id, loserId: randomHamster2.id } 
    const postMatchOne= async() => {
        try { 
            const response = await fetch('/matches', 
            { method: 'POST', headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(matchObjectOne)})
            const postMatch = await response.json()
            console.log('Success', postMatch)
            setMatchId(postMatch)
        } catch (err) {
            console.log(err)
        }
    }
    const matchObjectTwo = { winnerId: randomHamster2.id, loserId: randomHamster1.id }
    const postMatchTwo= async() => {
        try { 
            const response = await fetch('/matches', 
            { method: 'POST', headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(matchObjectTwo)})
            const postMatch = await response.json()
            console.log('Success', postMatch)
            setMatchId(postMatch)
        } catch (err) {
            console.log(err)
        }
    }
  
	const sendMatchesRequest=async () => {
        const response = await fetch('/matches',{ method: 'GET', headers: { 'Content-Type' : 'application/json'}})
        const matchData = await response.json() 
        console.log (matchData)
    }
    console.log(matchId)
    
    return (
        <div className="random-hamster-grid">
            {toggle && <MatchWinner />}
            {!toggle && 
            <section>
                <article onClick={()=> {handleWinHamster(randomHamster1) ; handleLosingHamster(randomHamster2); postMatchOne(); sendMatchesRequest(); setToggle(!toggle)}}>
                    <img src={'/img/' + randomHamster1.imgName} alt={randomHamster1.name}/>
                    <h3>{randomHamster1.name}</h3>
                </article>
                <h1>VS</h1>
                <article onClick={()=> {handleWinHamster(randomHamster2) ; handleLosingHamster(randomHamster1); postMatchTwo(); sendMatchesRequest(); setToggle(!toggle)}}>
                    <img src={'/img/' + randomHamster2.imgName} alt={randomHamster2.name}/>
                    <h3>{randomHamster2.name}</h3>
                </article>
            </section>
            }
        </div>
    )
}

export default RandomHamster
