import React, { useState, useEffect } from "react";
import { getPresets } from './Services';

export default function TimedCharge() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchJSON = async () => {
            let response = await getPresets();
            setResponse(response);
        };
        fetchJSON();
    },); // !Need to add timer in here [] to ensure this runs when time has changed!

    if (response == null) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <input type="checkbox" id="timedCharge" defaultChecked={response.data.enabled} />
            <label for="timedCharge">Timed Charge Enabled</label>
        </div >
    );
}

const styles = {
    container: {
        textAlign: "left",
        fontFamily: "Arial, sans-serif",
        fontSize: "20px",
        color: "#000000ff",
        margin: "20px auto auto auto",
    },
};