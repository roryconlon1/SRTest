import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
height: 500px;
width: 800px;
overflow: auto;`

const Homepage = () => {

    const [interaction, setInteraction] = useState([])
    const [chartData, setChartData] = useState([]);

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

    useEffect(() => {
        setChartData(occurenceVals);
    }, [interaction])

    const occurenceVals = Object.keys(occurence).map((objectKey) => (
        {name : objectKey, value : occurence[objectKey]}))        

    return (
        <ChartWrapper>
                    <BarChart 
                width={1800} 
                height={500}
                data={chartData}
                >
            <XAxis dataKey="name"  />
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="value" fill="#8884d8"/>
        </BarChart>
        </ChartWrapper>
    )
}

export default Homepage;