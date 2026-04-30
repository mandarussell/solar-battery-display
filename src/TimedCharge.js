import './TimedCharge.css';
import React, { useState, useEffect } from "react";
import { getPresets } from './Services';

function TimedCharge() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchJSON = async () => {
            let response = await getPresets();
            setResponse(response);
        };
        fetchJSON();
    }, []); // !Need to add timer in here [] to ensure this runs when time has changed!

    if (response == null) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div>
            <h1>Timed Charge</h1>
            <div>
                <label className="toggle-switch">
                    <input type="checkbox" className="checkbox" defaultChecked={response.data.enabled} />
                    <span className="slider"></span>
                </label>
                <span className='time-input'>
                    <input
                        type="time"
                        className="start-time"
                        defaultValue={response.data.slots[0].start_time}
                        disabled={response.data.enabled === false ? true : false}
                    ></input>
                    <input
                        type="time"
                        className="end-time"
                        defaultValue={response.data.slots[0].end_time}
                        disabled={response.data.enabled === false ? true : false}
                    ></input>
                </span>
                <span>
                    <input
                        type="number"
                        className="charge-limit"
                        defaultValue={response.data.slots[0].percent_limit}
                        disabled={response.data.enabled === false ? true : false}
                    ></input>
                    %
                </span>
            </div>
        </div>
    );
}

export default TimedCharge;