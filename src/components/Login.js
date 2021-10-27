import React, { useRef, useState  } from 'react';
import { useHistory,Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import { useAuth } from '../contexts/Auth'

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
            <div class="card text-dark bg-light mb-3">
                <form className="container px-4 mb-3 md-5" onSubmit={handleSubmit}>
                    <h1 className="text-center">Login</h1>
                                    <p>
                                        Enter your e-mail and password. New? <Link to="Register"> Sign-up</Link>
                                    </p>
                                    <div class="form-floating mb-3">                                        
                                        <input id="input-email" className="form-control px-2 mb-3 mt-3" type="email" ref={emailRef}  required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating mb-3">     
                                        <input id="input-password" className="form-control px-2" placeholder="Senha" type="password" ref={passwordRef} required/>
                                        <label for="floatingInput">Senha</label>
                                    </div>                                         
                                    <button type="submit" className="btn btn-primary me-md-2" onClick={handleSubmit}>Login</button>
                                    <div>{error && JSON.stringify(error)}</div>                     
                                        {/* <Link to="forgot">
                                            <a href="" class="link-primary">
                                            Forgot Password
                                            </a>
                                        </Link> */}
                </form>                    
            </div>
        </div>            
    )
}

    

export default Login;
   
