import React from 'react';
import { useHistory } from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import { useState, useRef } from 'react';
import { useAuth } from '../contexts/Auth'
import { supabase } from '../Client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
    useClass('bg-blue');
    const mailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const surnameRef = useRef()
    const mailRef2 = useRef()

    const [error, setError] = useState(null)

    const { signUp } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
    e.preventDefault()
    const email = mailRef.current.value
    const password = passwordRef.current.value
    const name = nameRef.current.value
    const surname = surnameRef.current.value
    const mail = mailRef2.current.value
    
    const { error } = await signUp({ email, password})
    await supabase
            .from('posts')
            .insert([
                { name, surname, mail}
            ])
            .single()
    
    if (error) return setError(error)
    
    

    history.push('/')   
  }

    return (
        <div className="mt-5 flex-row align-items-center m-4 p-3 ">
            <div class="card text-dark bg-light mb-3">
                                <form className="container px-4 mb-3 md-5"onSubmit={handleSubmit}>                               
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
                                        <label for="floatingInput">Email</label>
                                    </div>                                
                                    <div class="form-floating mb-3">                                        
                                        <input  className="form-control px-2 mb-3 mt-3" type="email" ref={mailRef}  required />
                                        <label for="floatingInput">Repita o Email</label>
                                    </div>
                                    <div class="form-floating mb-3">     
                                        <input id="input-password" className="form-control px-2" placeholder="Senha" type="password" ref={passwordRef} required/>
                                        <label for="floatingInput">Senha</label>
                                    </div>
                                         
                                    <button  type="submit" className="btn btn-primary px-2 mb-3 mt-3" onClick={handleSubmit}>Register</button>
                                    <ToastContainer>
                                                <div>{error ? toast(JSON.stringify(error.message)) : toast("Sucess")}</div>
                                    </ToastContainer>
                                    {/* <p className="px-2 mb-3" > <Link to="Login"> Login</Link></p>                          */}
                                </form>
            </div>
        </div>            
    )
}

    

export default Register;

