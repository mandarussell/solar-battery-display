import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);

        // Clean up the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.time}>{time}</h1>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "left",
        fontFamily: "Arial, sans-serif",
    },
    time: {
        fontSize: "15px",
        color: "#ffffffff",
    },
};

export default Clock;