import { Link } from 'react-router-dom';
import logo from '../../logos/hamster-logo.png'
import './Start.css'

const Header = () => {

    return (
        <div className="header">
            <nav>
                <Link to="/"><img className="hamster-logo" src={logo} alt="" width="100px"/></Link>
                <Link className="header-links" to="/tävla" onClick={()=>window.location.href = '/tävla'}> TÄVLA </Link>
                <Link className="header-links" to="/galleri"> GALLERI </Link>
                <Link className="header-links" to="/statistik"> STATISTIK </Link>
                <Link className="header-links" to="/historik"> HISTORIK </Link>
		    </nav> 
            <h1> HAMSTER WARS </h1> 
        </div>
    )
}

export default Header
