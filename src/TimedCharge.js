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
            <label className="toggle-switch">
                <input type="checkbox" className="checkbox" defaultChecked={response.data.enabled} />
                <span className="slider"></span>
            </label>
            <span className="text">Timed Charge Enabled</span>
        </div >
    );
}

export default TimedCharge;