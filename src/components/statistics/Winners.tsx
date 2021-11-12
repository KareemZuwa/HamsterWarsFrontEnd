import {Hamster} from '../../models/Hamster'
import './Stats.css'

interface WinnersProps {
    winners: Hamster;

}

const Winners = ({winners}:WinnersProps) => {
    return (
        <div>

            {winners.imgName.startsWith('hamster')
                            ? <img src={'/img/' + winners.imgName} alt={winners.name} width="100px"/>
                            : <img src={winners.imgName} alt={winners.name}/>
                }

                <p>{winners.name} </p>
            
        </div>
    )
}

export default Winners
