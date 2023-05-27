import { useState } from "react"

import { login } from '../config/Auth';

export const Login = () => {
    const [email, setEmail] = useState('isc.gaona@gmail.com');
    const [password, setPassword] = useState('12qwaszx');

  
    const onHandlerEmail = (email) => {
      setEmail(() => email);
      console.info(email);
    }
    const onHandlerPassword = (password) => {
      setPassword(() => password);
      console.info(password);
    }
  
    const { user, setUser } = useState();

    
    const loginWhitEmail = async () => {
      console.log(email,password);
      await login(email, password).then(async(result) => {
        console.info(result);
        if (typeof result.user?.email !== 'undefined') {
         
          setUser({ session: true, data: { email: result.user?.email, localId: result.user?.uid } });
        } else if (typeof result?.code === 'number') {
          console.info("regreso un error", result);
    
        } else {
          console.error("No entro en if");
    
        }
      }).catch((error) => {
        console.log(error.message);
    
      });
      console.log(user);
    }
    return (
        <div className="container-auth">
            <h2>Login</h2>

            <form>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={onHandlerEmail}
                    value={email}
                />
                <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    onChange={onHandlerPassword}
                    value={password}
                />

                <div className="container-buttons">
                    <button type="button" onClick={loginWhitEmail}>Log In</button>
                    <button type="button"> Google </button>
                </div>
            </form>
        </div>
    )
}