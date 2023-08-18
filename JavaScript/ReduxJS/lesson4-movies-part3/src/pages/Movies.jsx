import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const Movies = () => {
  const movies = useSelector(p=>p);
  
  return (
    <Container>
      <h1 className='text-center my-5'>Movie List</h1>
      <Row className='g-3'>
        {movies.map((item,count)=>(

        <SingleCard key={count} title={item.title} price={item.price} rate={item.rate} photo={item.image}/>
        ))}
      </Row>
    </Container>
  )
}

export default Movies