import { Button } from 'react-bootstrap';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const CartPage = () => {

    const { items, updateItemQuantity, removeItem, isEmpty,cartTotal,emptyCart } = useCart();

    return (
        <>
            <h1 className='text-center text-danger my-5'>Cart</h1>
            {isEmpty ? <h1 className='text-center text-warning'>No Product</h1> : <Container >
                <Row>
                    <Col sm={12} md={9}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, count) => (
                                    <tr>
                                        <th scope="row">{count + 1}</th>
                                        <td><img src={item.images[0]} width={100} alt="" /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price * item.quantity}$</td>
                                        <td>
                                            <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                                            <span className='mx-2'>{item.quantity}</span>
                                            <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                                        </td>
                                        <td><Button variant='danger' onClick={() => removeItem(item.id)}>X</Button></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </Col>
                    <Col sm={12} md={3}>
                        <ul class="list-group">
                            <li class="list-group-item"><h3>Total Pirce</h3></li>
                            <li class="list-group-item"><h4 className='text-warning'>{cartTotal}$</h4></li>
                            <li class="list-group-item"><Button onClick={()=>{emptyCart()}} variant='danger'>Clear cart</Button><Button variant='success ms-3'>Checkout</Button></li>
                        
                        </ul>
                    </Col>
                </Row>
            </Container>}
        </>
    )
}

export default CartPage