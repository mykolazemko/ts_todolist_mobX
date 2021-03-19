import React, { useState } from 'react';
import './todo.scss';
import Input from './Input/Input';
import Container from './Container/Container'
import { observer } from 'mobx-react-lite';
import loginStore from '../../Store/loginStore';
import { Redirect, Route, Switch } from 'react-router-dom';

interface ITodo {
    id: number,
    item: string,
    done: boolean,

}

const TodoList = observer(() => {
    const { isLogged } = loginStore
    let [todosArr, setArr] = useState<ITodo[]>([
        { id: 1, item: 'lorem ipsum', done: false },
        { id: 2, item: 'dolor sit amet', done: false },
        { id: 3, item: 'consectetur adipisicing', done: false },
    ])


    return (
        <div className="todo">
            {isLogged
                ? <div>
                    <Input todosArr={todosArr} setArr={setArr} />
                    {todosArr.map(i =>
                        <Container
                            setArr={setArr}
                            todosArr={todosArr}
                            item={i.item}
                            isDone={i.done}
                            id={i.id} />
                    )}
                </div>
                :<h1> Please LogIn</h1>
            }
        </div>
    )
})

export default TodoList