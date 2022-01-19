import React, { useState } from 'react';

const Box = (props) => {
    const [color, setColor] = useState("");
    const [boxlist, setBoxlist] = useState([]);

    const colorHandler = (e) => {
        setColor(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newColor = {
            color: color
        };

        setBoxlist([...boxlist, newColor]);
        setColor('');
    }

return(
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='color'>Color: </label>
                <input name="color" type="text" onChange={ colorHandler } value={color} />
                <button type="submit" value="Add Box"/>
            </div>
        </form>

    <div style={{ display: 'flex'}}>

    </div>

    </div>
);






};


export default Box;