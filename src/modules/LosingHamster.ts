import { Hamster } from '../models/Hamster'

const handleLosingHamster = async(hamsterObject: Hamster)=> {
    const dataLosingHamster: Hamster = { 
        id:hamsterObject.id, 
        name:hamsterObject.name, 
        age: hamsterObject.age, 
        favFood:hamsterObject.favFood, 
        loves:hamsterObject.loves, 
        imgName:hamsterObject.imgName, 
        wins:hamsterObject.wins, 
        defeats: hamsterObject.defeats + 1, 
        games:hamsterObject.games + 1
    }

    try { 
        const response = await fetch('/hamsters/' + hamsterObject.id, 
        { method: 'PUT', headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(dataLosingHamster)})
        const changeHamsterTwo = await response.json()
        console.log('Success', changeHamsterTwo)
    } catch (err) {
        console.log(err)
    }
}

export default handleLosingHamster