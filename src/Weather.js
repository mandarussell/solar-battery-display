import React, { useState, useEffect } from "react";
import { getWeatherData } from './Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid */
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

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

    return (
        <div>
            <div>
                <span>Next hour: </span>
                <FontAwesomeIcon icon="fa-solid fa-cloud-sun" />
            </div>
            <div>
                <span>Tomorrow: </span>
                <FontAwesomeIcon icon="fa-solid fa-sun" />
            </div>
        </div >
    );
}

export default Weather;