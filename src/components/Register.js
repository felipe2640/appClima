import React from 'react';

import { useHistory } from 'react-router-dom';

import useClass from './../hooks/add-class-body';
import { useState, useRef } from 'react';
import { useAuth } from '../contexts/Auth'
import { supabase } from '../Client';

const Register = (props) => {
    useClass('bg-blue');
    const mailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const surnameRef = useRef()
    const mailRef2 =useRef()
    

    const [error, setError] = useState(null)

    const { signUp } = useAuth()
    const history = useHistory()

    async function handleSubmit() {
    

    const email = mailRef.current.value
    const password = passwordRef.current.value
    

    const { error } = await signUp({ email, password})

    if (error) return setError(error)

    history.push('/')
  }

    async function createUser() {
    const name = nameRef.current.value
    const surname = surnameRef.current.value
    const mail = mailRef2.current.value
        await supabase
            .from('posts')
            .insert([
                { name, surname, mail}
            ])
            .single()
    }

    return (
        <div className="mt-5 flex-row align-items-center ">
            <div class="card text-dark bg-light mb-3">
                                <form className="container px-4 mb-3 md-5"onSubmit={handleSubmit,createUser}> 
                                    <h1 className="text-center">Register</h1>
                                    <div class="form-floating mb-3">                                        
                                        <input id="input-name" className="form-control px-2 mb-3 mt-3" type="text" ref={nameRef}  required />
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                    <div class="form-floating mb-3">                                        
                                        <input id="input-surname" className="form-control px-2 mb-3 mt-3" type="text" ref={surnameRef}  required />
                                        <label for="floatingInput">Sobrenome</label>
                                    </div>
                                    <div class="form-floating mb-3">                                        
                                        <input id="input-email" className="form-control px-2 mb-3 mt-3" type="email" ref={mailRef2}  required />
                                        <label for="floatingInput">Repita o Email</label>
                                    </div>                                
                                    <div class="form-floating mb-3">                                        
                                        <input id="input-email" className="form-control px-2 mb-3 mt-3" type="email" ref={mailRef}  required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating mb-3">     
                                        <input id="input-password" className="form-control px-2" placeholder="Senha" type="password" ref={passwordRef} required/>
                                        <label for="floatingInput">Senha</label>
                                    </div>
                                         
                                    <button  type="submit" className="btn btn-primary me-md-2" onClick={createUser,handleSubmit}>Register</button>
                                    <div>{error && JSON.stringify(error)}</div>                                   
                                </form>
            </div>
        </div>            
    )
}

    

export default Register;

