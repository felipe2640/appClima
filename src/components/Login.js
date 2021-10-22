import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container,Col, Row,Form,Input,InputGroup,CardBody,Card, Button} from 'reactstrap';
import useClass from './../hooks/add-class-body';
import { supabase } from '../Client';

const Login = (props) => {
    useClass('bg-blue');


    const handleLogin = () =>{
        console.log('Login')
    }
    return (
        <div className="mt-5 flex-row align-items-center ">
            <Container>
                <Row className="justify-content-center">
                    <Col md="5">
                        <Card>
                            <CardBody>
                                <Form className="mb-3">
                                    <h1 className="text-center">Login</h1>
                                    <p>
                                        Enter your e-mail and password. New? <Link to="Register"> Sign-up</Link>
                                    </p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"></Input>
                                    </InputGroup >
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                       <Link to="/WeatherApp"> <Button color="primary"onClick={handleLogin}>Login</Button></Link>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Link to="forgot">
                                            <Button color="link">
                                            Forgot Password
                                            </Button>
                                        </Link>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>            
    )
}

    

export default Login;
   
