import {Hamster} from '../../models/Hamster'
import './Stats.css'

interface LosersProps {
    losers: Hamster;

}

const Losers = ({losers}:LosersProps) => {
    return (
        <div>

                {losers.imgName.startsWith('hamster')
                            ? <img src={'/img/' + losers.imgName} alt={losers.name} width="100px"/>
                            : <img src={losers.imgName} alt={losers.name}/>
                }

                <p>{losers.name} </p>
                
        </div>
    )
}

export default Losers
