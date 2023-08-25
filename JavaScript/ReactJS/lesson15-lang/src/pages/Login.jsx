import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const user = {
    email: "hasan@webluna.az",
    password: 'hasan123'
}


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState({
        text: "",
        color: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMsg({
                text: "Please, fill input",
                color: "light"
            })
        } else {
            if (email === user.email && password === user.password) {
                setMsg({
                    text: "Login successfully",
                    color: "success"
                })
                navigate('/products');
                localStorage.setItem('active','true');
                window.location.reload();
            } else {
                setMsg({
                    text: "email or password is wrong!",
                    color: "warning"
                })
            }
        }
    }

    return (
        <>
            <h1 className='text-center text-light my-5'>Login</h1>
            <div className="d-flex justify-content-center">
                <Col md={5}>
                    <p className={`alert alert-${msg.color}`}>{msg.text}</p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="enter password" />
                        </Form.Group>

                        <Button variant="light" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </div>
        </>
    );
}

export default Login;