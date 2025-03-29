import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import './History.css'

function HistoryPage() {
    //State to store the data coming from backend via GET route
    const [allHistory, setAllHistory] = useState([]);
    //State to display error msg if Backend API fails to retrieve data
    const [displayError, setDisplayError] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/history").then((res) => {
            setAllHistory(res.data);

        }).catch((err) => setDisplayError(true))

    }, []);

    return (
        <div data-testid="History" className='mainContainer'>
            <div className='historyHeading'>
                <p className='mainHead'>History Queries</p>
                <p className='headCaption'>History of the user's queries.</p>

            </div>

            <table data-testid="data-table" className='history-table'>
                <thead>
                    <tr>
                        <th>Source Address</th>
                        <th>Destination Address</th>
                        <th>Distance in Miles</th>
                        <th>Distance in Kilometers</th>
                    </tr>
                </thead>
                <tbody>

                    {allHistory.map((data) => {

                        return (
                            <tr key={data._id}  data-testid="data-row">
                                <td>{data.sourceAddress}</td>
                                <td>{data.destinationAddress}</td>
                                <td>{data.distanceInMiles}</td>
                                <td>{data.distanceInKilometers}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

            <div className={displayError ? 'errorMsgDisplay' : 'errorMsg'}>
                <h2>Something Wrong 😕</h2>
                <p>Please try later</p>
            </div>
        </div>

    );
}

export default HistoryPage;