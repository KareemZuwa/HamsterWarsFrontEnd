import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../../store'
import { actions } from '../../features/hamstersReducer'
import '../gallery/Gallery.css'

const Gallery = () => {
    const dispatch = useDispatch()
    const hamsters = useSelector((state: RootState) => state.hamsters)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const dataHamster = await response.json() 
            dispatch(actions.getHamsters(dataHamster)) 
        }
        sendRequest()
	}, [])

    const deleteHamster = async function deleteHamster(id: string) {
        fetch('/hamsters/' + id, { method: 'DELETE' }) 
        .then(res => res.json()) 
        .then(data => { console.log(data) }) 
        .catch(err => console.log(err));
    }
    const handleRemove = (hamsterId: string) => dispatch(actions.removeHamster(hamsterId))

    return (
        <div>
            <h2>Galleri på Hamstrar</h2>

            <ul className="hamsters">

        
                    {hamsters ?
                    hamsters.map(hamster => (
                        <li key={hamster.id}> 
                        <img src={'/img/' + hamster.imgName} alt="hamster" width="100px"/>
                        <span>Namn: {hamster.name} </span>
                        <button onClick={()=> {deleteHamster(hamster.id); handleRemove(hamster.id)}}> Radera hamster </button>
                        </li>
                    )): <h3> Väntar på galleri med hamsters </h3>}
               
            </ul>
            
        </div>
    )
}

export default Gallery
