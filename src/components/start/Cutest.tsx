import { useState, useEffect } from 'react'
import { Hamster } from '../../models/Hamster'
import Crown from '../../logos/noun_Crown_1348333.svg' 

const Cutest = () => {
    const [data, setData] = useState<Hamster[] | null>(null)

    useEffect(() => {
		async function sendRequest() {
            const response = await fetch('/hamsters/cutest')
            const dataHamster = await response.json()
            setData(dataHamster)
        }
        sendRequest()
	}, [])

    function refreshPage() {
        window.location.reload();
      }    

    return (
        <div className="cutest">
            {data ? 
            data.map(cutest => (
                <section key={cutest.id} className="cutest-info">
                    <img src={Crown} alt="crown"/>
                    {cutest.imgName.startsWith('hamster')
                    ?<img className="cutest-hamster-pic" src={'/img/' + cutest.imgName} alt={cutest.name} width="200px"/>
                    :<img className="cutest-hamster-pic" src={cutest.imgName} alt={cutest.name} width="200px"/>}
                    <p>Namn: {cutest.name}</p>
                    <p>Vinster: {cutest.wins}</p>
                </section>
                )) : <h3> Väntar på den sötaste hamstern <br/> <br/> Tryck refresh om hamstern ej visas <button className="refresh-button" onClick={refreshPage}>Refresh</button></h3> }
                  
        </div>
    )
}

export default Cutest
