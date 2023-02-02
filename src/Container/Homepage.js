import React, { useEffect, useState } from "react";

const Homepage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://substantiveresearch.pythonanywhere.com/")
        .then(res => res.json())
        .then(info => setData(info))
    }

    const displayData = data.map((call, index) => {
        return <div>
            <li>
                    {call.name}
            </li>
        </div>
    })

    return(
        <div>
            <ul>
                {displayData}
            </ul>
        </div>
    )
}

export default Homepage;