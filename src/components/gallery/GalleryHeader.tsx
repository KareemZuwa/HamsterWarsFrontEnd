import { useRecoilState } from 'recoil'
import AddHamster from './AddHamster'
import atomToggle from '../../atoms/Toggle'

const GalleryHeader = () => {
    const [toggle,setToggle] = useRecoilState(atomToggle)

    return (
        <div className="galleri-rubrik">

            <h2>GALLERI</h2>

            <button 
            onClick={()=> setToggle(!toggle)}
            > Add New Hamster </button>

            {toggle && <AddHamster />}
            
        </div>
    )
}

export default GalleryHeader
