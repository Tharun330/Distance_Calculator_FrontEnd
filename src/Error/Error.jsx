import React, { useContext ,useState } from 'react';
import { ErrorContext } from '../store/context';
import './Error.css'

function Error() {

    const { display, setDisplay } = useContext(ErrorContext);

  


    let handleClick =() =>{
       setDisplay(false)
    }
    
    return (
        <div className={display?'errorcontainer' : 'errorcontainerInvisible'}>
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
