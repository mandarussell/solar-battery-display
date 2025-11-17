import React, { useState, useEffect } from "react";
import { getSystemData } from './Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid */
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Data() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const INVERTER = process.env.REACT_APP_INVERTER;
    const [response, setResponse] = useState(null);

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
            let response = await getSystemData(url, headers);
            setResponse(response);
        };
        fetchJSON();
    }, [API_KEY]); // !Need to add timer in here [] to ensure this runs when time has changed!

    if (response == null) {
        return (
            <div styles={styles.container}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        // Place holder. Actually build up data from the returned JSON.
        <div styles={styles.container}>
            <div styles={styles.battery}>
                <FontAwesomeIcon icon="fa-solid fa-battery-full" />
                <span styles={styles.value}>{response.battery.percent}%</span>
            </div>
            <div styles={styles.solar}>
                <FontAwesomeIcon icon="fa-solid fa-solar-panel" />
                <span styles={styles.value}>{response.solar.power}</span>
            </div>
            <div styles={styles.grid}>
                <FontAwesomeIcon icon="fa-solid fa-plug-circle-bolt" />
                <span styles={styles.value}>{response.grid.power}</span>
            </div>
            <p>API: {API_KEY}</p>
            <p>INVERTER: {INVERTER}</p>
        </div >
    );
}

const styles = {
    container: {
        textAlign: "left",
        fontFamily: "Arial, sans-serif",
        color: "#000000ff",
    },
    battery: {
        fontSize: "40px",
        color: "#000000ff",
    },
    solar: {
        fontSize: "40px",
        color: "#000000ff",
    },
    grid: {
        fontSize: "40px",
        color: "#000000ff",
    },
    value: {
        padding: "20px",
    },
};

export default Data;