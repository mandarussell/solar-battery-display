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
        <div style={styles.container}>
            <div style={styles.battery}>
                <FontAwesomeIcon icon="fa-solid fa-battery-full" />
                <span style={styles.value}>{response.battery.percent}%</span>
            </div>
            <div style={styles.battery}>
                <FontAwesomeIcon icon="fa-solid fa-bolt" />
                <span style={styles.value}>{response.inverter.power}</span>
            </div>
            <div style={styles.solar}>
                <FontAwesomeIcon icon="fa-solid fa-solar-panel" />
                <span style={styles.value}>{response.solar.power}</span>
            </div>
            <div style={styles.grid}>
                <FontAwesomeIcon icon="fa-solid fa-plug-circle-bolt" />
                <span style={styles.value}>{response.grid.power}</span>
            </div>
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
        marginLeft: "30px",
    },
};

export default Data;