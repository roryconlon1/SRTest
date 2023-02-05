import React, { useEffect, useState } from "react";

const Homepage = () => {

    const [interaction, setInteraction] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://substantiveresearch.pythonanywhere.com/")
            .then((res) => {
                if (res.ok){
                    return res.json();
                }
                throw new Error('Something went wrong');
            })
            .then(data => setInteraction(data))
            .catch((err) => {
                console.log(err);
            })
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