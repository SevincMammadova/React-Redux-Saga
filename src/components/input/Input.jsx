import React, { memo } from 'react';
import './style.less'

function Input () {
    return(
        <div className = 'input-wrapper'>
            <input className='todo-input' type='text'></input>
        </div>
    )
}

export default memo(Input);