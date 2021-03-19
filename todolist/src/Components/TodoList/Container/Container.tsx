import React, { useState } from 'react';

interface ContainerProps {
    todosArr: { id: number, item: string, done: boolean }[]
    item: string,
    isDone: boolean,
    id: number,
    setArr: any,
}
interface HTMLElement {
    remove(): void;
  }
const Container = ({ item, isDone, id, todosArr, setArr }: ContainerProps) => {

    const [status, setStatus] = useState(isDone)
    const container = document.getElementsByClassName("container");
    const todos = document.getElementsByClassName("todos");    

    const doneTask = () => status ? setStatus(false) : setStatus(true);
    const deleteTask  = () => setArr(todosArr.filter(i => i.id !== id))

    return (
        <div className="container">
            <div className="todos">
                <input onChange={() => doneTask()} id="input" type="checkbox" />
                {status
                    ? <span className="line-through">{item}</span>
                    : <span>{item}</span>}
                <span onClick={() => deleteTask()}>(X)</span>
            </div>
        </div>
    )
}

export default Container