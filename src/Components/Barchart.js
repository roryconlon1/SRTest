import React from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import './Barchart.css'
import { Zoom } from "react-reveal";

const Barchart = ({ chartData }) => {

    return (
        <div className="bar">
            <Zoom>
                <BarChart
                    width={1000}
                    height={500}
                    data={chartData}
                    padding={100}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle="-40" height={100} />
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
