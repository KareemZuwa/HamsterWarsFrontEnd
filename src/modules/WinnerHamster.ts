import { WinningHamster } from '../models/WinningHamster'

const handleWinHamster = async(hamsterObject: WinningHamster)=> {

    const dataWinHamsterOne: WinningHamster = {id:hamsterObject.id, wins: hamsterObject.wins+ 1, games:hamsterObject.games + 1 }

    try { 
        const response = await fetch('/hamsters/' + hamsterObject.id, 
        { method: 'PUT', headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(dataWinHamsterOne)})
        const changeHamsterOne = await response.json()
        console.log('Success', changeHamsterOne)
    } catch (err) {
        console.log(err)
    }
}
export default handleWinHamster