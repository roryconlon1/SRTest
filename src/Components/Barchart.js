import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import './Barchart.css'
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Zoom } from "react-reveal";

const ChartWrapper = styled.div`
height: 500px;
width: 800px;
overflow: auto;`

const Barchart = ({ chartData }) => {

    return (
        <div>
        <Zoom>
        <ChartWrapper>
            <BarChart
                width={800}
                height={500}
                data={chartData}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar
                    dataKey="value"
                    fill="#8884d6"
                />
            </BarChart>
        </ChartWrapper>
        </Zoom>
        </div>
    )
}

export default Barchart;
