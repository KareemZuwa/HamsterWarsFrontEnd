import Cutest from './Cutest'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import atomHamsters from '../../atoms/Hamsters'
import { useEffect } from 'react'

const Start = () => {
    const [hamstersArray,setHamstersArray] = useRecoilState(atomHamsters)
    console.log(hamstersArray)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters')
            const dataHamster = await response.json() 
            // dispatch(actions.getHamsters(dataHamster))--REDUX
            setHamstersArray(dataHamster)
        }
        sendRequest()
	}, [setHamstersArray])

    return (
        <div className="start-page">
            <Cutest />
            <section className="about">
                <h3> " Välkommen till Hamster Wars " </h3>
                <p>Här tävlar man om den sötaste hamstern.
                Man får se en bild på två slumpade hamstrar och väljer genom att klicka på den bild som man tycker är den sötaste hamstern.</p>

                
                <Link to="/tävla"><button className="start-contest-button">LÅT TÄVLINGEN BÖRJA </button></Link>
            </section>
  
        </div>
    )
}

export default Start
