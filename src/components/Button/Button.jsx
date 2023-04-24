import React, {useContext} from 'react';
import './Button.scss'
import Context from "../../Context/Context";
const Button = () => {
    const {onClickOpenModalWindow, initModalWindow} = useContext(Context)
    return (
        <div className='button '>
            {initModalWindow.map((it,index) => {
                return (
                    <div key={index}>
                        <button onClick={onClickOpenModalWindow} className='button__button'>{it} {index + 1}</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Button;