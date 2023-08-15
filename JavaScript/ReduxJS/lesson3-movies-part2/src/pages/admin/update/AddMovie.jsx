import React from 'react'
import MovieForm from '../MovieForm'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../../manager/actions/movieAction'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container>
        <h1 className='text-center my-3'>Add Movie</h1>
        <MovieForm sendData={(i)=>{
                dispatch(addMovie(i));
                navigate('/admin')
        }}/>
    </Container>
  )
}

export default AddMovie