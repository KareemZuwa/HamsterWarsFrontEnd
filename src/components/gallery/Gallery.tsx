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
                        <li key={hamster.id}> 
                        <img src={hamster.imgName} alt="hamster" width="80px"/>
                        <span>Namn: {hamster.name} </span>
                        <span>Vinster: {hamster.wins} </span>
                        </li>
                    ))}
               
            </ul>
            
        </div>
    )
}

export default Gallery
