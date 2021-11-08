import { useRecoilState } from 'recoil'
import atomHamsters from '../../atoms/Hamsters'
import { Hamster } from '../../models/Hamster'
import { WinningHamster } from '../../models/WinningHamster'
import handleLosingHamster from '../../modules/LosingHamster'
import './Contest.css'

const RandomHamster = () => {
     //Random på två hamstrar
    const [hamstersArray] = useRecoilState(atomHamsters)

    const randomHamster1: Hamster = hamstersArray[Math.floor(Math.random()*hamstersArray.length)];
    //filtrera bort första random hamstern
    const selectedHamster= hamstersArray.filter(hamster=> hamster.id !== randomHamster1.id);
    //Slumpa hamster 2
    const randomHamster2: Hamster = hamstersArray[Math.floor(Math.random()*selectedHamster.length)];
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

    const matchObjectOne = { winnerId: randomHamster1.id, loserId: randomHamster2.id } 
    const postMatchOne= async() => {
        try { 
            const response = await fetch('/matches', 
            { method: 'POST', headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(matchObjectOne)})
            const postMatch = await response.json()
            console.log('Success', postMatch)
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
                <button className="cutest-button" onClick={()=> {handleWinHamsterOne() ; handleLosingHamster(randomHamster2); postMatchOne()}}>Jag Är Sötast</button>
                </article>
                <h1>VS</h1>
                <article>
                <img src={'/img/' + randomHamster2.imgName} alt={randomHamster2.name}/>
                <h3>{randomHamster2.name}</h3>
                <button className="cutest-button" onClick={()=> {handleWinHamsterTwo() ; handleLosingHamster(randomHamster1); postMatchTwo()}}>Jag Är Sötast</button>
                
                </article>
            </section>

            <button onClick={() => console.log('Ny Fight')}className="new-fight-button"> NY FIGHT </button>

        </div>
    )
}

export default RandomHamster
