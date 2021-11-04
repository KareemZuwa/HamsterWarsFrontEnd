import { useState } from 'react'
import { useRecoilState } from 'recoil'
import atomToggle from '../../atoms/Toggle'
import './AddHamster.css'

//Hämta hamster model

const AddHamster = () => {
    const [toggle,setToggle] = useRecoilState(atomToggle)

    //inputfälten
    const [hamsterName, setHamsterName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [favFood, setFavFood] = useState<string>('')
    const [loves, setLoves] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string>('')

    console.log(hamsterName, age, favFood, loves, imageUrl)

    //Data som skickas in till 
    const data = {  
            name: {hamsterName}, 
            age: {age}, 
            imgName: {imageUrl},
            loves: {loves},
            favFood: {favFood},
            games: 0,
            wins: 0,
            defeats: 0
    }

    const addHamster = async ()=> {
        fetch('/hamsters/', { method: 'POST', headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)}) 
        .then(res => res.json()) 
        .then(data => { console.log("Success:" , data); }) 
        .catch((err) => {console.log(err)});
        setToggle(!toggle)
     }

    //Add till redux store
    //  const addOneHamster = (hamsterId: string) => dispatch(actions.addHamster(hamsterId))
    // valideringsfunktioner som skall trigga classer
    //valideringfsfunktion som skall trigga lägg till knapp

    return (
        <div className="overlay">
            <div className="dialog">
                <h3> Lägg Till Ny Hamster </h3>
                <div className="form">
                    <div className="input-fields">
                        <p>Namn:</p> <input type="text" placeholder="Namn"
                        onChange={e => setHamsterName(e.target.value)} value={hamsterName}
                        className="inputs"/>
                    </div>
                    <div className="input-fields">
                        <p>Ålder:</p> <input type="number" placeholder="Ålder" 
                        onChange={e => setAge(e.target.valueAsNumber)} value={age}
                        className="inputs"/>
                    </div>
                    <div className="input-fields">
                        <p>Favorit Mat:</p> <input type="text" placeholder="Favorit Mat"
                        onChange={e => setFavFood(e.target.value)} value={favFood}
                        className="inputs"/>
                    </div>
                    <div className="input-fields">
                        <p>Älskar:</p> <input type="text" placeholder="Älskar"
                        onChange={e => setLoves(e.target.value)} value={loves}
                        className="inputs"/>
                    </div>
                    <div className="input-fields">
                        <p>Bild URL:</p> <input type="text" placeholder="Bild URL"
                        onChange={e => setImageUrl(e.target.value)} value={imageUrl}
                        className="inputs"/>
                    </div>

                    <div className="buttons">
                    <button onClick={addHamster}> Lägg Till </button>
				    <button onClick={()=> setToggle(!toggle)}> Ångra </button>
                    </div>
				    
			    </div>
            </div>
            
            
            
        </div>
    )
}

export default AddHamster
