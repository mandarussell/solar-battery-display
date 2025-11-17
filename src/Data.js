import React, { useState, useEffect } from "react";
import Services from './Services';

function Data() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const INVERTER = process.env.REACT_APP_INVERTER;
    const [response, setResponse] = useState('');

    useEffect(() => {
        // const url = new URL(
        // `https://api.givenergy.cloud/v1/inverter/${INVERTER}/system-data/latest`
        // );
        const url = '';
        const headers = {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        const fetchJSON = async () => {
            let response = await Services(url, headers);
            setResponse(response);
        };
        fetchJSON();
    }, [API_KEY]); // !Need to add timer in here [] to ensure this runs when time has changed!

    return (
        // Place holder. Actually build up data from the returned JSON.
        <div>
            <p>API: {API_KEY}</p>
            <p>INVERTER: {INVERTER}</p>
            <p>Response JSON: {response.status}</p>
        </div >
    );
}

export default Data;