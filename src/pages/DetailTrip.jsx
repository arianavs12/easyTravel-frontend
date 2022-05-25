import { Button, Input } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const DetailTrip = (props) => {
    const { id } = useParams()
    const [trip, setTrip] = useState({})
    //toggle
    const [showEdit, setShowEdit] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:5005/trips/details/${id}`)
            .then(lainfo => {
                console.log(lainfo)
                setTrip(lainfo.data)
            })
            .catch(console.log)
    }, [id])
    return (
        <div>

            {showEdit === false && (
                <>
                    <Image src={trip.photo} alt={trip.destination} width={200} />
                    <p>{trip.typeOfLodging}</p>
                    <p>{trip.description}</p>
                    <p>{trip.budget}</p>
                </>
            )}
            {
                showEdit === true && (
                    <div>
                        <Input placeholder='Destino' value={trip.destination} />
                        <Input placeholder='Transporte' value={trip.typeOfTransport} />
                        <Input placeholder='Alojamiento' value={trip.age} />
                        <Input placeholder='Foto' value={trip.photo} />
                        {props.user?._id}
                        <Button>Actualizar</Button>
                    </div>
                )
            }

            <div title="Editar">
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    href="/trips"
                    sx={{ minWidth: 200,}}
                    icon={<EditIcon />}
                    onClick={() => setShowEdit(true)}
                />
            </div>
            <div title="Eliminar">
                <Button color="secondary"
                    variant="contained"
                    size="large"
                    href="/trips"
                    sx={{ minWidth: 200,}} icon={<DeleteIcon />} />
            </div>
        </div >
    )
}

export default DetailTrip