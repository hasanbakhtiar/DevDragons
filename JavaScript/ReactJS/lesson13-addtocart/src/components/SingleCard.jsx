import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleCard = ({ photo, title, price, id, alldata }) => {
    const { addItem } = useCart();
    const notify = () => toast.success('Product added', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    return (

        <Col sm={12} md={4}>
            <Card>
                <Card.Img height={300} variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className='text-light'>{title}</Card.Title>
                    <Card.Text className='text-light'>
                        {price} $
                    </Card.Text>
                    <Button variant="dark me-3 border-light" onClick={() => { notify(addItem(alldata)) }}>Add to cart</Button>
                    <LinkContainer to={`/products/${id}`}><Button variant="primary">Read more</Button></LinkContainer>
                </Card.Body>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </Card>
        </Col>
    )
}

export default SingleCard