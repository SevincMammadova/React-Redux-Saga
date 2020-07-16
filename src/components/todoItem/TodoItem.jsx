import React from 'react';
import './style.less';


class TodoItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className={'item-wrapper'}>
                <div className={'text-wrapper'}>
                    <p className={'text'}> 1)  Решить задачку и пойти погулять в парке с друзьями</p>
                </div>
                <div className={'button-wrapper'}>
                    <input className={'done-button'} type={'checkbox'}/>
                    <button className={'delete-button'}>x</button>
                </div>
            </div>
        )
    }
}

export default TodoItem;