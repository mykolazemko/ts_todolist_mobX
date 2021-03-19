import React from 'react';
import './header.scss'
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import loginStore from '../../Store/loginStore';

const Header = observer(() => {
  const { isLogged, logouting, userLogin } = loginStore
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todolist">TodoList</Link>
        </li>
        <li className="user">
        {isLogged
            ? <span>
              <span>{userLogin}</span>
              <button onClick={() => logouting()}>LogOut</button>
            </span>
            : <Link to="/login">LogIn</Link>}
        </li>      
      </ul>     
    </nav>
  )
})

export default Header