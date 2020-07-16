import React, { memo } from 'react';
import './style.less'

function Input () {
    return(
        <div className = 'input-wrapper'>
            <textarea className='todo-input' type='text'></textarea>
        </div>
    )
}

export default memo(Input);