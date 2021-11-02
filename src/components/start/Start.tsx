import Cutest from './Cutest'
import { Link } from 'react-router-dom'

const Start = () => {
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
