import React, { useState, setState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Card from 'react-bootstrap/Card'

export default function Register() {
    const [emailError, setEmailError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/register/`, {
            "name": e.target[0].value,
            "email": e.target[1].value,
            "password": e.target[2].value
        }, { withCredentials: true }).then(response => {
            setEmailError(false);
        }).catch(err => {
            setEmailError(true);
            console.log(err);
        })
    }


    return (
        <div>
            <Row style={{ justifyContent: "center", paddingTop: "5rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Container>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="John Doe" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                {emailError ? <p style={{ color: "red" }}>Email already in use</p> : ""}
                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </Container>
                    </Card.Body>
                </Card>

            </Row>
        </div >
    )
}
