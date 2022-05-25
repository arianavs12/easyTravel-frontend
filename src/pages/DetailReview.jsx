import { Button, Input } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const DetailReview = (props) => {
    const { id } = useParams()
    const [review, setReview] = useState({})
    //toggle
    const [showEdit, setShowEdit] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:5005/reviews/details/${id}`)
            .then(lainfo => {
                console.log(lainfo)
                setReview(lainfo.data)
            })
            .catch(console.log)
    }, [id])
    return (
        <div>

            {showEdit === false && (
                <>
                    {/* <Image src={trip.photo} alt={trip.destination} width={200} /> */}
                    <p>{review.title}</p>
                    <p>{review.description}</p>
                </>
            )}
            {
                showEdit === true && (
                    <div>
                        <Input placeholder='Titulo' value={review.title} />
                        <Input placeholder='Description' value={review.description} />
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