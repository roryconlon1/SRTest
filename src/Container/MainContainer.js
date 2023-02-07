import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Barchart from "../Components/Barchart";
import HomePage from "../Components/HomePage";
import NavBar from "../NavBar";

const MainContainer = () => {

    const [interaction, setInteraction] = useState([])
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        setChartData(occurenceVals);
    }, [interaction])

    const getData = () => {
        fetch("http://substantiveresearch.pythonanywhere.com/")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Something went wrong');
            })
            .then(data => setInteraction(data))
            .catch((err) => {
                console.log(err);
            })
    }

    // Reduce API data to an Object of department name and frequency of interactions
    const occurence = interaction.reduce((accumulator, value) => {
        accumulator[value.name] = accumulator[value.name] ? accumulator[value.name] + 1 : 1;
        return accumulator;
    }, {})

    // Loop over new object to be array of objects to access key and value for displaying in a graph
    const occurenceVals = Object.keys(occurence).map((objectKey) => (
        { name: objectKey, value: occurence[objectKey] }))

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/barchart" element={<Barchart chartData={chartData}/>} />
            </Routes>
        </div>
    )
}

export default MainContainer;