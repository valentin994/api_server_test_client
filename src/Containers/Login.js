import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Card from 'react-bootstrap/Card'


export default function Login(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/user/${e.target[0].value}`).then(response => {
        })
    }

    return (
        <div>
            <Row style={{ justifyContent: "center", paddingTop: "5rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Container>
                            <Form onSubmit={handleSubmit}>
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
