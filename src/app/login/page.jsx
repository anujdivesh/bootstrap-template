'use client'
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API call or validation)
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div>
            <br/>
            <Container>
                <h2 className='text-center mt-2'>Login</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="shadow-sm mt-4">
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 mt-3">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
