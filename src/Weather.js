import React, { useState, useEffect } from "react";
import { getWeatherData } from './Services';


function Weather() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchJSON = async () => {
            let response = await getWeatherData();
            setResponse(response);
        };
        fetchJSON();
    },); // !Need to add timer in here [] to ensure this runs every hour!

    if (response == null) {
        return (
            <div>
                <p>Weather Loading...</p>
            </div>
        );
    }

    let index = new Date().toLocaleTimeString([], { hour: '2-digit' });
    index++;
    const average = (response.hourly.cloud_cover[30] + response.hourly.cloud_cover[42]) / 12;

    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Cloud cover</h1>
            <span style={styles.title}>Next Hour: </span>
            <span>{response.hourly.cloud_cover[index]} %</span>
            <span style={styles.divide}> | </span>
            <span style={styles.title}>Tomorrow's Average: </span>
            <span>{average.toFixed()} %</span>
        </div >
    );
}

const styles = {
    container: {
        textAlign: "left",
        fontFamily: "Arial, sans-serif",
    },
    h1: {
        margin: "20px auto 5px auto",
    },
    divide: {
        margin: "auto 30px auto 30px",
    },
    title: {
        fontWeight: "bold",
    },
};

export default Weather;