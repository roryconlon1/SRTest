import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './Piechart.css'

const Piechart = ({ chartData }) => {

    const colours = ['#B8860B', '#000000', '#A39A92', '#435440', '#DC143C', '#00008B', '#8B008B', '#1E90FF', '#4B0082', '#808000', '#FFA500'];

    const radian = Math.PI / 180;
    const renderCustomisedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * radian);
        const y = cy + radius * Math.sin(-midAngle * radian);
        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="pie">
            <PieChart width={600} height={550}>
                <Pie
                    data={chartData}
                    cx={300}
                    cy={230}
                    labelLine={false}
                    label={renderCustomisedLabel}
                    outerRadius={230}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={colours[index % colours.length]} />)
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Piechart;