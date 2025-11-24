const LIVE_MODE = false;

export async function getSystemData(url, headers) {
    if (LIVE_MODE) {
        // !For live only!
        //
        // let response;
        // try {
        //     response = fetch(url, {
        //         method: "GET",
        //         headers,
        //     });
        // } catch (error) {
        //     console.error(error.message);
        //     return;
        // }
        // if (!response.ok) {
        //     throw new Error(`Get latest system data status: ${response.status}`);
        // }
        //
        // const data = await response.json();
        // return data
    }

    return {
        // Test JSON response.
        "time": "1990-08-30T03:23:58Z",
        "status": "Normal",
        "solar": {
            "power": 2874,
            "arrays": [
                {
                    "array": 1,
                    "voltage": 413.1,
                    "current": 654.2,
                    "power": 563
                },
                {
                    "array": 2,
                    "voltage": 220.4,
                    "current": 670.5,
                    "power": 1526
                }
            ]
        },
        "grid": {
            "voltage": 1557.1,
            "current": 3626.8,
            "power": -4689,
            "frequency": 86.5
        },
        "battery": {
            "percent": 30,
            "power": 1711,
            "temperature": 78.2
        },
        "inverter": {
            "temperature": 55.2,
            "power": 324,
            "output_voltage": 225.7,
            "output_frequency": 50.6,
            "eps_power": 155
        },
        "consumption": 15877
    };
};

export async function getWeatherData(latitude, longitude) {
    if (LIVE_MODE) {
        // // !For live only!
        //
        // let response;
        // const LATITUDE = process.env.REACT_LATITUDE;
        // const LONGITUDE = process.env.REACT_LONGITUDE;
        // const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=direct_radiation,direct_radiation_instant,terrestrial_radiation,terrestrial_radiation_instant,shortwave_radiation_instant,shortwave_radiation,cloud_cover`;
        // try {
        //     response = fetch(url, {
        //         method: "GET",
        //     });
        // } catch (error) {
        //     console.error(error.message);
        //     return;
        // }
        // if (!response.ok) {
        //     throw new Error(`Get weather data status: ${response.status}`);
        // }
        //
        // const data = await response.json();
        // return data
    };

    return {
        // Test data returned.
        "latitude": 52.52,
        "longitude": 13.419,
        "elevation": 44.812,
        "generationtime_ms": 2.2119,
        "utc_offset_seconds": 0,
        "timezone": "Europe/Berlin",
        "timezone_abbreviation": "CEST",
        "hourly": {
            "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00"],
            "temperature_2m": [13, 12.7, 12.7, 12.5, 12.5, 12.8, 13, 12.9, 13.3]
        },
        "hourly_units": {
            "temperature_2m": "°C"
        }
    };
};
