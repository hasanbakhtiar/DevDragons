import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SingleCard = ({photo,title,price,id}) => {
    return (

        <Col sm={12} md={4}>
            <Card>
                <Card.Img height={300} variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className='text-light'>{title}</Card.Title>
                    <Card.Text className='text-light'>
                        {price} $
                    </Card.Text>
                    <LinkContainer to={`/products/${id}`}><Button variant="primary">Read more</Button></LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard