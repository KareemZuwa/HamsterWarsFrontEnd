import { Link } from 'react-router-dom';
import logo from '../../logos/hamster-logo.png'
import './Start.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/"><img src={logo} alt="" width="100px"/></Link>
                <Link to="/tävla"> TÄVLA </Link>
                <Link to="/galleri"> GALLERI </Link>
                <Link to="/statistik"> STATISTIK </Link>
                <Link to="/historia"> HISTORIK </Link>
		    </nav> 
            <h1> HAMSTER WARS </h1> 
        </div>
    )
}

export default Header
