import React from 'react';
import './Heading.css';
function Heading() {
    return (
        <div className='container-fluid'>

            <div className='row'>

                <div className='col-6'>
                    <h1>Distance Calculator</h1>
                    <p className='text-muted'>Prototype web application for calculating the distance between addresses</p>

                </div>

                <div className='col-6 headBtn'>
                    <button className='btn btn-dark'>View Historical Queries <span className='ms-4 '><i class="fa-solid fa-clock-rotate-left"></i></span></button>
                    
                </div>

            </div>



        </div>
    );
}

export default Heading;