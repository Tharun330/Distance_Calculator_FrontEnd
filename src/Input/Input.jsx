import React, { useContext } from 'react';
import './Input.css'
import { useState } from 'react';
import axios from 'axios';
import { ErrorContext } from "../store/context";

function Input() {

    //Using Context to set state in Error.jsx file to display error message if api call fails
    const { setDisplay } = useContext(ErrorContext);

    //State to handle the changes on form & extract the data in form
    const [values, setValues] = useState({
        sourceAddress: '',
        destinationAddress: '',
        miles: '',
        kilometers: '',
        both: ''
    })

    //State to store response object from backend
    const [results, setResults] = useState(null);
    //State to display error message if any field in form is not filled
    const [error, setError] = useState(false);
    //State to disable the radio button if one radio button is selected
    const [radiodisable, setRadioDisable] = useState(false);

    //Handle function to track the changes on form
    let changeHandle = (inputIdentifier, newValue) => {

        setValues(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })

    }

    //Handle function to retrieve the calculated data from backend using axios & handling basic form validation
    let handleSubmit = async () => {

        setRadioDisable(true);

        try {

            if (!values.sourceAddress) {
                setError(true);
            }
            if (!values.destinationAddress) {
                setError(true);
            }
            if (!values.miles && !values.kilometers && !values.both) {
                setError(true);
            }

            const response = await axios.post("http://localhost:8080/history/new", {
                sourceAddress: values.sourceAddress,
                destinationAddress: values.destinationAddress
            })

            setError(false);
            setResults(response);

        } catch (err) {

            setDisplay(true);

        }
    }

    //Handle function to Reset the values in input fields
    let handleReset = () => {

        setValues({
            sourceAddress: '',
            destinationAddress: '',
            miles: '',
            kilometers: '',
            both: ''
        })
        setResults(null);
        setRadioDisable(false);

    }

    return (
        // Contains form fields like Input for Addresses, Radio Button to select units
        <div className='mainContainerCalculator'>

            <form>

                <div className='inputContainer'>
                    <div className='inputDiv'>
                        <label htmlFor='input' className='text-muted '>Source Address</label>
                        <input className='input' id='input' type='text' value={values.sourceAddress} onChange={(event) => changeHandle('sourceAddress', event.target.value)} placeholder='Input address' required />
                        {error ? <p>Please fill all neccessary inputs!</p> : ''}
                    </div>

                    <div className='inputDiv ms-5'>
                        <label htmlFor='input' className='text-muted'>Destination Address</label>
                        <input className='input' id='input' type='text' value={values.destinationAddress} onChange={(event) => changeHandle('destinationAddress', event.target.value)} placeholder='Input address' required />
                    </div>

                    <div className='radiocontainer'>
                        <label>Unit</label>
                        <div>
                            <input className='form-check-input' id='miles' onChange={(event) => changeHandle('miles', event.target.value)}
                                value='miles' name='unit' disabled={radiodisable} type='radio' />
                            <label className='radiolabel' htmlFor='miles'>Miles</label>
                        </div>
                        <div>
                            <input className='form-check-input' id='kilometers' onChange={(event) => changeHandle('kilometers', event.target.value)}
                                value='kilometers' name='unit' disabled={radiodisable} type='radio' />
                            <label className='radiolabel' htmlFor='kilometers'>Kilometers</label>
                        </div>
                        <div> <input className='form-check-input' id='both' onChange={(event) => changeHandle('both', event.target.value)}
                            value='both' name='unit' disabled={radiodisable} type='radio' />
                            <label className='radiolabel' htmlFor='both'>Both</label></div>
                    </div>

                    {/* Displays the calculated distance */}
                    <div className='resultbox'>
                        <p>Distance</p>
                        <p className='resultpara'>

                            {results && results.data.error === 'Address not found' ? 'Invalid Address' :
                                <b>
                                    {results && values.miles === 'miles' && results.data.distanceInMiles + ' mi'}
                                    {results && values.kilometers === 'kilometers' && results.data.distanceInKilometers + ' km'}
                                    {results && values.both === 'both' && <span className='bothdistance'><span>{results.data.distanceInKilometers} km </span> <span className='mi-para'>{results.data.distanceInMiles} mi </span> </span>}

                                </b>}
                        </p>
                    </div>
                </div>
            </form>
            
            {/* Button to Calculate distance & Reset */}
            <div className='btncontainer'>
                <div >
                    <button className='submitbtn' onClick={handleSubmit}>Calculate Distance <span><i class="fa-solid fa-calculator ms-4"></i></span></button>
                </div>
                <div>
                    <button className='resetbtn' onClick={handleReset}>Reset<span><i class="fa-solid fa-arrow-rotate-left ms-4"></i></span></button>
                </div>
            </div>
        </div>
    );
}

export default Input;