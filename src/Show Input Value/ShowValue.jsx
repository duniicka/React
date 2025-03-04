import React from "react";
import { useState } from "react";
function ShowInputValue() {
    const [inputValue, setInputValue] = useState("")
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <h2>Show Input Value</h2>
            <input type="text" onChange={handleInputValue} />
            <hr />
            <p style={{ color: "red" }}>{inputValue}</p>
        </>
    )
}
export default ShowInputValue
