import {Hamster} from '../../models/Hamster'
import  {useState} from 'react'
import MoreInfo from './MoreInfo'

interface CardProps {
    hamster: Hamster;
    remove: (hamsterId: string)=> void;
    deleteFromApi: (hamsterId: string)=> void;
}

const Card = ({hamster,deleteFromApi,remove}:CardProps) => {
    const [showInfo, setShowInfo] = useState(false)


    return (
        <div>
                   <section> 
                         {hamster.imgName.startsWith('hamster')
                                ? <img src={'/img/' + hamster.imgName} alt={hamster.name}/>
                                : <img src={hamster.imgName} alt={hamster.name}/>
                        }
                        
                        <p>{hamster.name} </p>
            
                        {showInfo && <MoreInfo hamster={hamster} setShowInfo={setShowInfo}/>}
                        

                        <button type="button" onClick={()=>setShowInfo(!showInfo)}className="info">Mer Info</button>
                        <button onClick={()=> {deleteFromApi(hamster.id); remove(hamster.id)}}>  Radera hamster </button>
            
                        </section>
            
        </div>
    )
}

export default Card
