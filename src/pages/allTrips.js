import axios from 'axios'
import { useState, useEffect } from 'react'
import Cards from '../components/Card'


const AllTrips = () => {
    const [trips, setTrips] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5005/api/trips")
            .then(misdatos => {
                setProjectos(misdatos.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>AllTrips
            {projectos.map(project => <Cards key={project._id} projectito={project} />)}
        </div>
    )
}

export default AllTrips