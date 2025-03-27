import React, { useState } from 'react';
import './Heading.css';
import { Link } from 'react-router-dom';
function Heading() {

    const [changeBtn, setChangeBtn] = useState(true);

    let handleClick = () => {

        setChangeBtn((prev) => !prev);
        console.log('btn clicked');
    }


    return (
        <div className='container-fluid'>

            <div className='row'>

                <div className='col-6'>
                    <h1>Distance Calculator</h1>
                    <p className='text-muted'>Prototype web application for calculating the distance between addresses</p>

                </div>

                <div className='col-6 headBtn'>

                    {changeBtn ? (<Link to='/history'>
                        <button className='btn btn-dark historybtn' onClick={handleClick}>View Historical Queries<span className='ms-4 '><i class="fa-solid fa-clock-rotate-left"></i></span></button>
                    </Link>) :
                        (<Link to='/'>
                            <button className='btn btn-dark backToCalculatorbtn' onClick={handleClick}>Back to Calculator<span className='ms-4 '><i class="fa-solid fa-calculator"></i></span></button>
                        </Link>)}

                </div>

            </div>



        </div>
    );
}

export default Heading;