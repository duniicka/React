import React, { useState } from "react";
function RandomBoxColor(params) {
    const [bgColor, setBgColor] = useState("")
    function colorChange() {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        setBgColor(`rgb(${red}, ${green}, ${blue})`)
    }
    return (
        <>
            <h2>Random Box Color Changing</h2>
            <button onClick={colorChange}>Click to change the color</button>
            <div style={{ width: "100px", height: "100px", border: "1px solid black", backgroundColor: bgColor, marginTop: "10px" }}></div>
        </>
    )
}
export default RandomBoxColor