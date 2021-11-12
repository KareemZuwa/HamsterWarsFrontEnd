import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import GalleryHeader from './GalleryHeader'
import Card from './Card'
import '../gallery/Gallery.css'
import atomAltHamster from '../../atoms/AltHamster'

const Gallery = () => {
    const [hamstersArray,setHamstersArray] = useRecoilState(atomAltHamster)
   
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
        setHamstersArray((hamstersArray)=> hamstersArray!.filter((hamsterObject => hamsterObject.id !== hamsterId)))}

    return (
        <div>
            <GalleryHeader />
            <div className="hamsters">

                    {hamstersArray ?
                    hamstersArray.map(hamster => (
                        <Card key={hamster.id} hamster={hamster} remove={removeHamsterObject} deleteFromApi={deleteHamster} />
                 
                    )):<h3> Väntar på galleri med hamsters </h3>}
               
            </div>
            
        </div>
    )
}

export default Gallery
