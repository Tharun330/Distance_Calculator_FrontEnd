import React, { useContext, useState } from 'react';
import { ErrorContext } from '../store/context';
import './Error.css'

function Error() {
    //Destructuring fields from ErrorContext which is in src\store\context.jsx to transfer the state into Input component
    const { display, setDisplay } = useContext(ErrorContext);



    //Handle function to set state to display Connection failed error message
    let handleClick = () => {
        setDisplay(false)
    }

    return (
        <div className={display ? 'errorcontainer' : 'errorcontainerInvisible'}>
            <div className='failedicon'>
                <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div className='errorMessages'>

                <h6>Calculation failed</h6>
                <p>Something went wrong</p>
                <p>and the Calculation failed</p>
            </div>
            <div>
                <i class="fa-solid fa-xmark" onClick={handleClick}></i>
            </div>


        </div>
    );
}

export default Error;
