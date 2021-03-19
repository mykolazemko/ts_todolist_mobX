import React from 'react';
import './App.css';
import Header from './Components/Header/Heder'
import Home from './Components/Home/Home';
import TodoList from './Components/TodoList/TodoList';
import Login from './Components/Login/Login';
import { BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/todolist"><TodoList /></Route>
          <Route path="/login"><Login /></Route>         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
