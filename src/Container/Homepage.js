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

    const occurence = interaction.reduce((accumulator, value) => {
        accumulator[value.name] = accumulator[value.name] ? accumulator[value.name] + 1 : 1;
        return accumulator;
    }, {})

    const occurenceVals = Object.keys(occurence).map((objectKey, index) => {
        return (
            <div key={index}>
                <li>
                    {objectKey} : {occurence[objectKey]}
                </li>
            </div>
        )
    })

    return (
        <div>
            <ul>
                {occurenceVals}
            </ul>
        </div>
    )
}

export default Homepage;