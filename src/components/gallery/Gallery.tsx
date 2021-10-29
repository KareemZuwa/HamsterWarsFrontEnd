import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import '../gallery/Gallery.css'

const Gallery = () => {

    const hamsters = useSelector((state: RootState) => state.hamsters)
    return (
        <div>
            <h2>Galleri på Hamstrar</h2>

            <ul className="hamsters">
        
                    {hamsters.map(hamster => (
                        <li key={hamster.id}> Namn: {hamster.name} Vinster: {hamster.wins}</li>
                    ))}
               
            </ul>
            
        </div>
    )
}

export default Gallery
