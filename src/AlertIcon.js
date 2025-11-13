// import React, { useState, useEffect } from "react";

function AlertIcon() {
    const alertString = "[ ! ]";
// const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));

// useEffect(() => {
// const timer = setInterval(() => {
// setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
// }, 1000);

// // Clean up the timer when the component unmounts
// return () => clearInterval(timer);
// }, []);

return (
<div style={styles.container}>
    <h1 style={styles.alert}>{alertString}</h1>
</div>
);
}

const styles = {
container: {
textAlign: "right",
fontFamily: "Arial, sans-serif",
},
alert: {
fontSize: "15px",
color: "#00c24aff",
},
};

export default AlertIcon;