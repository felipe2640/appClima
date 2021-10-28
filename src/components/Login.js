import React, { useRef, useState  } from 'react';
import { useHistory,Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import { useAuth } from '../contexts/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    useClass('bg-blue');

  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState(null)

  const { signIn } = useAuth()
  const history = useHistory()
  
  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    


    const { error } = await signIn({ email, password })
    
    if (error) return setError(error)
    
    
    
    history.push('/')
  }




    return (
        <div className="mt-5 flex-row align-items-center ">
            <div class="card text-dark bg-light  m-4 p-3">
                <form className="container" onSubmit={handleSubmit}>
                    <h1 className="text-center">Login</h1>
                                    <p class="m-3 mb-2 mt-2">
                                        Enter your e-mail and password. New? <Link to="Register"> Sign-up</Link>
                                    </p>
                                    <div class="form-floating m-3 mt-1 mb-1">                                        
                                        <input id="input-email" className="form-control px-2 mb-3 mt-3" type="email" ref={emailRef}  required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating m-3 mt-1 mb-3">     
                                        <input id="input-password" className="form-control px-2" placeholder="Senha" type="password" ref={passwordRef} required/>
                                        <label for="floatingInput">Senha</label>
                                    </div>                                         
                                    <button type="submit" className="btn btn-primary m-3 mt-1 mb-3"  onClick={handleSubmit}>Login</button>
                                    <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    >
                                                <div>{error ? toast(JSON.stringify(error.message)) : toast("Sucess")}</div>
                                    </ToastContainer>
                                    
                </form>                    
            </div>
        </div>            
    )
}

    

export default Login;
   
