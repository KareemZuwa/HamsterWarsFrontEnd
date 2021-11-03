import { useRecoilState } from 'recoil'
import atomToggle from '../../atoms/Toggle'
import './AddHamster.css'

const AddHamster = () => {
    const [toggle,setToggle] = useRecoilState(atomToggle)

    return (
        <div className="overlay">
            <div className="dialog">
                <h3>Add New Hamster Here</h3>
                <div>
				    <button > Add movie </button>
				    <button onClick={()=> setToggle(!toggle)}> Cancel </button>
			    </div>
            </div>
            
            
            
        </div>
    )
}

export default AddHamster
