import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import './Barchart.css'
import { Zoom } from "react-reveal";

const ChartWrapper = styled.div`
height: 500px;
width: 500px;
overflow: auto;`

const Barchart = ({ chartData }) => {

    return (
        <div>
        <Zoom>
            <BarChart
                width={700}
                height={500}
                data={chartData}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                    dataKey="value"
                    fill="#3087CC"
                />
            </BarChart>
        </Zoom>
        </div>
    )
}

export default Barchart;
