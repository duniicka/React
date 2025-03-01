import React from "react";

function InputFields({ setInput1, setInput2 }) {
    return (
        <div>
            <label>
                Input 1:
                <input
                    type="number"
                    onChange={(e) => setInput1(Number(e.target.value))} 
                />
            </label>
            <br />
            <label>
                Input 2:
                <input
                    type="number"
                    onChange={(e) => setInput2(Number(e.target.value))} 
                />
            </label>
        </div>
    );
}

export default InputFields;
