import React from 'react';
import { observer } from 'mobx-react-lite';
import loginStore from '../../Store/loginStore';
import { Redirect } from 'react-router-dom';

const Login = observer(() => {
    const { isLogged, userLogin, setUserLoginValue, setUserPassValue, loginSubmit,
        signInSubmit , logouting} = loginStore
    return (
        <div>
            {!isLogged
                ? <form>
                    <input value={loginStore.userLogin}
                        type="text"
                        placeholder="Enter login"
                        onChange={setUserLoginValue} /><br />
                    <input value={loginStore.userPassword}
                        type="password"
                        placeholder="Unter password"
                        onChange={setUserPassValue} /><br />
                    <input type="submit" value="LogIn"
                    onClick={loginSubmit} />
                    <input type="submit" value="SignIn"
                    onClick={signInSubmit} />
                </form>
                :  <Redirect to="/todolist" /> 
              }            
        </div>
    )
}
)
export default Login