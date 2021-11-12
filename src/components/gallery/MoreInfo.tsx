import {Hamster} from '../../models/Hamster'
import '../gallery/MoreInfo.css'

interface MoreInfoProps {
    hamster: Hamster;
    setShowInfo:(boolean:false)=> void;
}

const MoreInfo = ({hamster, setShowInfo}:MoreInfoProps) => {
 
    return (
        <div className="more-info-overlay">
    
            <div className={"extra-info"}>
                    <h3>{hamster.name}</h3>
                    <p>Vinster: {hamster.wins}</p>
                    <p>Förluster: {hamster.defeats}</p>
                    <p>Ålder: {hamster.age}</p>
                    <p>FavoritMat: {hamster.favFood}</p>
                    <p>Älskar: {hamster.loves}</p>
                    <button onClick={()=>setShowInfo(false)}className="info">Mindre Info</button>
            </div> 
            
        </div>
    )
}

export default MoreInfo
