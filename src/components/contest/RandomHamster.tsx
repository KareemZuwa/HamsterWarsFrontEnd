import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import atomRandomHamster from '../../atoms/RandomHamster'
import './Contest.css'
import { Hamster } from '../../models/Hamster'

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
    const selectedHamster= randomHamster.filter(hamster=> hamster.id !== randomHamster1.id)
    //Slumpa hamster 2
    const randomHamster2: Hamster = randomHamster[Math.floor(Math.random()*selectedHamster.length)];
    //Winnig Hamster
    const datawinHamster: Hamster = {wins: randomHamster1.wins+1, games:randomHamster1.games+1, loves:randomHamster1.loves, defeats:randomHamster1.defeats, age: randomHamster1.age, favFood:randomHamster1.favFood, name:randomHamster1.name, imgName:randomHamster1.imgName, id:randomHamster1.id}
    //Vad händer när användaren klickar på sötast
    const handleWinHamsterOne = async() => {
        try { 
            const response = await fetch('/hamsters/' + randomHamster1.id, 
        { method: 'PUT', headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(datawinHamster)})
        const changeHamsterOne = await response.json()
        console.log('Success', changeHamsterOne)
        } catch (err) {
            console.log(err)
        }
        

        
    }
    const handleWinHamsterTwo = () => {
        console.log(randomHamster2.name, randomHamster2.id)
    }

    return (
        <div className="random-hamster-grid">

            <section>
                <article>
                <img src={'/img/' + randomHamster1.imgName} alt={randomHamster1.name}/>
                <h3>{randomHamster1.name}</h3>
                <button onClick={handleWinHamsterOne}>Jag Är Sötast</button>
                </article>
                <h1>VS</h1>
                <article>
                <img src={'/img/' + randomHamster2.imgName} alt={randomHamster2.name}/>
                <h3>{randomHamster2.name}</h3>
                <button onClick={handleWinHamsterTwo}>Jag Är Sötast</button>
                </article>
            </section>

            <button onClick={() => console.log('Ny Fight')}className="new-fight-button"> NY FIGHT </button>

        </div>
    )
}

export default RandomHamster
