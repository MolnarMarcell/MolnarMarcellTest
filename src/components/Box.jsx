import { useState } from "react";

export default function Box() {
    const [message, setMessage] = useState("Kezdeti uzenet");

    const handleClick = () => {
        setMessage("Clicked!")
    }

    return (
        <>

            <button onClick={handleClick}>Box</button>
            <button onClick={handleClick}>Box</button>
            <button onClick={handleClick}>Box</button>

            <h2>{message}</h2>
        </>
    );
}
