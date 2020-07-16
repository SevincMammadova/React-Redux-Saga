import React, {memo} from 'react';
import './style.less';


const  Button = () => {
    return(
        <div className={'button-wrapper'}>
            <button className={'add-button'} type={'submit'}>Add</button>
        </div>
    )
}

export default memo(Button);