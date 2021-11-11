import {Hamster} from '../../models/Hamster'
import  {useState} from 'react'

interface CardProps {
    hamster: Hamster;
    remove: (hamsterId: string)=> void;
    deleteFromApi: (hamsterId: string)=> void;
}

const Card = ({hamster,deleteFromApi, remove}:CardProps) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div>
                   <section> 
                         {hamster.imgName.startsWith('hamster')
                                ? <img src={'/img/' + hamster.imgName} alt={hamster.name}/>
                                : <img src={hamster.imgName} alt={hamster.name}/>
                        }
                        
                        <p>{hamster.name} </p>
            
                        {showInfo &&
                            <div className={"extra-info"}>
                                <p>Vinster: {hamster.wins}</p>
                                <p>Förluster: {hamster.defeats}</p>
                                <p>Ålder: {hamster.age}</p>
                                <p>FavoritMat: {hamster.favFood}</p>
                                <p>Älskar: {hamster.loves}</p>
                            </div> 
                         }
                        

                        <button type="button" onClick={()=>setShowInfo(!showInfo)}className="info">ℹ️</button>
                        <button onClick={()=> {deleteFromApi(hamster.id); remove(hamster.id)}}>  Radera hamster </button>
            
                        </section>
            
        </div>
    )
}

export default Card
