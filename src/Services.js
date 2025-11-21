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
            "temperature": 73.2
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

