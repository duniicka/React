import React, { useState } from "react";
import Wrapper from "./Wrapper";
function Sender(params) {
    const [inputValue, setInputValue] = useState("")
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const [buttonClick, setButtonClick] = useState("")
    const handleButtonClick = (e)=>{
        setButtonClick(setInputValue)
    }
    return (
        <>
            <h2>Message Sender</h2>
            <input type="text" onChange={handleInputValue}/>
            <button onClick={handleButtonClick}>Send Message</button>
        </>
    )
}
export default Sender

