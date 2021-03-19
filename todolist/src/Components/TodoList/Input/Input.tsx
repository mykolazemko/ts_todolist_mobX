import React, { useState } from 'react';

interface IInputProps {
    todosArr: { id: number; item: string; done: boolean; }[],
    setArr: any,
}

const Input = ({todosArr,setArr}:IInputProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newTask = {id:todosArr.length+1, item:inputValue, done:false}
        setArr([...todosArr, newTask]);
        setInputValue('')
    }

    return (
        <div >
            <form className="form" onSubmit={handleSubmit}>
                <input className="input"value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="Add New Task" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default Input