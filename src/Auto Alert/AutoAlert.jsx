import React, { useState } from "react";
function AutoAlert(params) {
    const [alert, setAlert] = useState("")
    const Alert = ()=>{
        setAlert("Alert")
        setTimeout(() => {
            setAlert("")
        }, 3000);
    }
    return (
        <>
            <h2>Auto Alert</h2>
            <button onClick={Alert}>Click for alert</button>
            <p style={{color: "red"}}>{alert}</p>
        </>
    )
}
export default AutoAlert