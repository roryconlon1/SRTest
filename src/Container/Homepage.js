import React, { useEffect, useState } from "react";

const Homepage = () => {

    const [interaction, setInteraction] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://substantiveresearch.pythonanywhere.com/")
        .then(res => res.json())
        .then(data => setInteraction(data))
    }

    const displayData = interaction.map((call, index) => {
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