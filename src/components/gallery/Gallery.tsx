import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import atomHamsters from '../../atoms/Hamsters'
import GalleryHeader from './GalleryHeader'
import '../gallery/Gallery.css'

const Gallery = () => {
    const [hamstersArray,setHamstersArray] = useRecoilState(atomHamsters)

    const deleteHamster = async function deleteHamster(id: string) {
        fetch('/hamsters/' + id, { method: 'DELETE' }) 
        .then(res => res.json()) 
        .then(data => { 
            console.log("deleting", data) 
        }) 
        .catch(err => console.log(err));
    }

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const dataHamster = await response.json() 
            setHamstersArray(dataHamster)
        }
        sendRequest()
	},[setHamstersArray])

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
