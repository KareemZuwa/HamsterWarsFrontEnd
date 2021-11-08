// import { useSelector, useDispatch } from 'react-redux'--REDUX
import { useRecoilState } from 'recoil'
import atomHamsters from '../../atoms/Hamsters'
import { useEffect } from 'react'
// import { RootState } from '../../store' --REDUX
// import { actions } from '../../features/hamstersReducer'--REDUX
import GalleryHeader from './GalleryHeader'
import '../gallery/Gallery.css'

const Gallery = () => {
    // const dispatch = useDispatch()-- REDUX
    // const hamsters = useSelector((state: RootState) => state.hamsters)--REDUX
    const [hamstersArray,setHamstersArray] = useRecoilState(atomHamsters)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const dataHamster = await response.json() 
            // dispatch(actions.getHamsters(dataHamster))--REDUX
            setHamstersArray(dataHamster)
        }
        sendRequest()
	}, [])

    console.log(hamstersArray)

    const deleteHamster = async function deleteHamster(id: string) {
        fetch('/hamsters/' + id, { method: 'DELETE' }) 
        .then(res => res.json()) 
        .then(data => { 
            console.log("deleting", data) 
        }) 
        .catch(err => console.log(err));
    }
    // const handleRemove = (hamsterId: string) => dispatch(actions.removeHamster(hamsterId))//REDUX
    const removeHamsterObject = (hamsterId: string) => {
        setHamstersArray((hamstersArray)=> hamstersArray.filter((hamsterObject => hamsterObject.id !== hamsterId)))}

    return (
        <div>
            <GalleryHeader />
            <ul className="hamsters">

                    {hamstersArray ?
                    hamstersArray.map(hamster => (
                        <li key={hamster.id}> 
                        <img src={'/img/' + hamster.imgName} alt="hamster"/>
                        <p>Namn: {hamster.name} </p>
                        <button onClick={()=> {deleteHamster(hamster.id); removeHamsterObject(hamster.id)}}> Radera hamster </button>
                        </li>
                    )): <h3> Väntar på galleri med hamsters </h3>}
               
            </ul>
            
        </div>
    )
}

export default Gallery
