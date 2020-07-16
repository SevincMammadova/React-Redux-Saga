import React, { memo } from 'react';
import Input from '../components/input/Input';
import './style.less'
import Button from '../components/button/Button';
import TodoItem from "../components/todoItem/TodoItem";

const Todo = () => {
    return(
        <div className='todo'>
            <div className={'head'} >
                <Input />
                <Button />
            </div>
            <div className={'todo-body'}>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default memo(Todo);