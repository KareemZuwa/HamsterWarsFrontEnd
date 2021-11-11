import { useRecoilState } from 'recoil'
import { Hamster } from '../../models/Hamster'
import atomRandomHamsterTwo from '../../atoms/RandomHamsterTwo'

import './MatchWinner.css'

const MatchWinner = () => {
     const [ranTwo, setRanTwo] = useRecoilState<Hamster>(atomRandomHamsterTwo)
     console.log(ranTwo)

    return (
        <div className="match-winner">
            <section className="winner-grid">
                <h1>Vinnaren är {ranTwo.name} 😺</h1>
            </section>
        </div>
    )
}

export default MatchWinner