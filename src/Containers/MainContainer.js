import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Barchart from "../Components/Barchart";
import HomePage from "../Components/HomePage";
import Piechart from "../Components/Piechart";
import NavBar from "../NavBar";

const ListOfLinks = styled.ul`
list-style-type: none;
margin: 0;
overflow: hidden;
display: flex;
justify-content: center;
background-color: #112A42;
`

const IndividualLink = styled.li`
float: left;
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
padding-top: 3px;
padding-bottom: 3px;`

const Wrapper = styled.div`
&:hover ${IndividualLink} {
    background-color: #38495e;
}
`
const Footer = styled.footer`
left: 0%;
bottom: 0%;
width: 100%;`

const Logo = styled.img`
max-height: 60px;
max-width: 200px;
object-fit: cover;`

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
        <div className="main">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/barchart" element={<Barchart chartData={chartData} />} />
                <Route path="/piechart" element={<Piechart chartData={chartData} />} />
            </Routes>
            <Footer>
                <ListOfLinks>
                    <Wrapper>
                        <IndividualLink>
                            <a class="github" href="https://github.com/roryconlon1"><Logo src={require("../Images/Octicons-mark-github.svg.png")} alt="Github Profile"></Logo></a>
                        </IndividualLink>
                    </Wrapper>
                    <Wrapper>
                        <IndividualLink>
                            <a class="github" href="https://www.linkedin.com/in/rory-conlon-643128134"><Logo src={require("../Images/linkedin.png")} alt="Linekdin Profile"></Logo></a>
                        </IndividualLink>
                    </Wrapper>
                </ListOfLinks>
            </Footer>
        </div>
    )
}

export default MainContainer;