import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import atomRandomHamster from '../../atoms/RandomHamster'
import { Hamster } from '../../models/Hamster'
import { WinningHamster } from '../../models/WinningHamster'
import handleLosingHamster from '../../modules/LosingHamster'
import './Contest.css'

const RandomHamster = () => {
     //Random på två hamstrar
    const [randomHamster,setRandomHamster] = useRecoilState(atomRandomHamster)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const randomHamster = await response.json()
            await setRandomHamster(randomHamster)
        }
        sendRequest()
	}, [])
    //Slumpa hamster 1
    const randomHamster1: Hamster = randomHamster[Math.floor(Math.random()*randomHamster.length)];
    //filtrera bort första random hamstern
    const selectedHamster= randomHamster.filter(hamster=> hamster.id !== randomHamster1.id);
    //Slumpa hamster 2
    const randomHamster2: Hamster = randomHamster[Math.floor(Math.random()*selectedHamster.length)];
    //Winnig Hamster
    const dataWinHamsterOne: WinningHamster = { wins: randomHamster1.wins+ 1, games:randomHamster1.games + 1 }
    const dataWinHamsterTwo: WinningHamster = { wins: randomHamster2.wins+ 1, games:randomHamster2.games + 1 }
    
    //Vad händer när användaren klickar på sötast 1
    const handleWinHamsterOne = async() => {
        try { 
            const response = await fetch('/hamsters/' + randomHamster1.id, 
            { method: 'PUT', headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(dataWinHamsterOne)})
            const changeHamsterOne = await response.json()
            console.log('Success', changeHamsterOne)
        } catch (err) {
            console.log(err)
        }  
    }
    //Vad händer när användaren klickar på sötast 2
    const handleWinHamsterTwo = async() => {
        try { 
            const response = await fetch('/hamsters/' + randomHamster2.id, 
            { method: 'PUT', headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(dataWinHamsterTwo)})
            const changeHamsterTwo = await response.json()
            console.log('Success', changeHamsterTwo)
        } catch (err) {
            console.log(err)
        }  
    }

    return (
        <div className="random-hamster-grid">

            <section>
                <article>
                <img src={'/img/' + randomHamster1.imgName} alt={randomHamster1.name}/>
                <h3>{randomHamster1.name}</h3>
                <button className="cutest-button" onClick={()=> {handleWinHamsterOne() ; handleLosingHamster(randomHamster2)}}>Jag Är Sötast</button>
                </article>
                <h1>VS</h1>
                <article>
                <img src={'/img/' + randomHamster2.imgName} alt={randomHamster2.name}/>
                <h3>{randomHamster2.name}</h3>
                <button className="cutest-button" onClick={()=> {handleWinHamsterTwo() ; handleLosingHamster(randomHamster1)}}>Jag Är Sötast</button>
                </article>
            </section>

            <button onClick={() => console.log('Ny Fight')}className="new-fight-button"> NY FIGHT </button>

        </div>
    )
}

export default RandomHamster
