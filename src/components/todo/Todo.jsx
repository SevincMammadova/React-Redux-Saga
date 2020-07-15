import React, { memo } from 'react';
import Input from '../input/Input';
import './style.less'

const Todo = () => {
    return(
        <div className='todo'>
        <Input />
        </div>
    )
}

export default memo(Todo);