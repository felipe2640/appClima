import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container,Col, Row,Form,Input,InputGroup,CardBody,Card, Button} from 'reactstrap';
import useClass from './../hooks/add-class-body';

const Forgot = (props) => {
    useClass('bg-blue')
    const handleforgot = () => {
        console.log('Forget password')
    }
    return (
        <div className="mt-5 flex-row align-items-center ">
            <Container>
                <Row className="justify-content-center">
                    <Col md="5">
                        <Card>
                            <CardBody>
                                <Form className="mb-3">
                                    <h1 className="text-center">Forgot Password</h1>
                                    <p>
                                        Enter your e-mail. You will receive a email if your password. 
                                    </p>
                                    <p>
                                        New? <Link to="Register"> Sign-up</Link>
                                    </p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"></Input>
                                    </InputGroup >
                                    <InputGroup className="mb-3">
                                       <Link to="Login"><Button color="primary" onClick={handleforgot}>Send</Button></Link>
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

    

export default Forgot;
   
