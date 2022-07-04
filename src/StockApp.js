import { useState } from "react";

function StockApp() {
    const [url, setUrl] = useState("01");

    const handleChange = e => {
        const number = e.target.value.toString().padStart(2, "01");
        setUrl(number)
    }

    return (
        <div className="App">
            <h1>stockx app</h1>
            <figure>
                <img src={`https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img${url}.jpg?=format,compress&q=90&update_at=1606321430&w=1000`} alt="some nikes" />
            </figure>
            <div style={{display: "flex"}}>
                <input type="range" min="1" max="36" style={{ width: "500px", margin: "auto" }} onChange={handleChange} value={url}/>
            </div>
        </div>
    );
}

export default StockApp;
