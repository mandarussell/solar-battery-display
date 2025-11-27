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
    },); // !Need to add timer in here [] to ensure this runs when time has changed!

    if (response == null) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            {/* <input type="checkbox" id="timedCharge" defaultChecked={response.data.enabled} />
            <span class="slider"></span>
            <label for="timedCharge">Timed Charge Enabled</label> */}
            <div>
                <label style={styles.toggleSwitch}>
                    <input type="checkbox" style={styles.checkbox} defaultChecked={response.data.enabled} />
                    <span style={styles.sliderContainer}>
                        <span style={styles.sliderUnchecked}></span>
                    </span>
                </label>
                <span style={styles.text}>Timed Charge Enabled</span>

            </div>
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
    /* Container for the toggle */
    toggleSwitch: {
        position: "relative",
        display: "inline-block",
        width: "50px",
        height: "24px",
    },
    /* Hide default checkbox */
    checkbox: {
        opacity: "0",
        width: "0",
        height: "0",
    },
    /* The track */
    sliderContainer: {
        position: "absolute",
        cursor: "pointer",
        backgroundColor: "#c9c9c9ff",
        borderRadius: "24px",
        width: "100%",
        height: "100%",
        transition: "background-color 0.3s",
    },
    /* The circular slider */
    sliderUnchecked: {
        content: "",
        position: "absolute",
        height: "20px",
        width: "20px",
        left: "4px",
        bottom: "2px",
        backgroundColor: "white",
        borderRadius: "50%",
        transition: "transform 0.3s",
    },
    sliderChecked: {
        transform: "translateX(26px)",
        backgroundColor: "#4caf50",
    },
    text: {
        margin: "auto auto auto 20px",
    },

};

export default TimedCharge;