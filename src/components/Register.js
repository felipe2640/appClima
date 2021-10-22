import React from 'react';
import { Link } from 'react-router-dom';
import {Container,Col, Row,Form,Input,InputGroup,CardBody,Card, Button} from 'reactstrap';
import useClass from './../hooks/add-class-body';
import { useState, useEffect } from 'react';
import { supabase } from '../Client';

const Register = (props) => {
    useClass('bg-blue');

    
    const [posts, setPosts] = useState([])
    const [post,setPost] = useState({name:'',
                                    surname:'',
                                    birthday:'',
                                    mail:'',
                                    password:''
                                })
    const {name, surname, birthday, mail, password} = post
    
    useEffect(() => {
        fetchPosts()
    }, [])
    async function fetchPosts() {
        const { data } = await supabase
         .from('posts')
         .select()
        setPost(data)
        console.log("data: ", data)
    }
    async function createUser() {
        await supabase
            .from('posts')
            .insert([
                { name, surname, birthday, mail, password }
            ])
            .single()
        setPost({ name:"", surname:"", birthday:"", mail:"", password:""})
        fetchPosts()
    }

    return (
        <div className="mt-5 flex-row align-items-center ">
            <Container>
                <Row className="justify-content-center">
                    <Col md="5">
                        <Card>
                            <CardBody>
                                <Form className="mb-3">
                                    <h1 className="text-center">Register</h1>
                                    <p>
                                        Registre-se
                                    </p>
                                    <InputGroup className="mb-3">
                                        <Input type="text" value={name} placeholder="Nome" onChange={e =>setPost({...post, name: e.target.value})}></Input>
                                    </InputGroup >
                                    <InputGroup className="mb-3">
                                        <Input type="text" value={ surname } placeholder="Sobrenome"onChange={e =>setPost({...post, surname: e.target.value})}></Input>
                                    </InputGroup >
                                    <InputGroup className="mb-3">
                                        <Input type="date" value={birthday} placeholder="Data de nascimento"onChange={e =>setPost({...post, birthday: e.target.value})}></Input>
                                    </InputGroup >
                                    <InputGroup className="mb-3">
                                        <Input type="email" value={mail} placeholder="E-mail"onChange={e =>setPost({...post, mail: e.target.value})}></Input>
                                    </InputGroup >
                                    <InputGroup className="mb-3">
                                        <Input type="password" value={password} placeholder="Senha"onChange={e =>setPost({...post, password: e.target.value})}></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                       <Link to=""> <Button color="primary"onClick={createUser}>Register</Button></Link>
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

    

export default Register;

