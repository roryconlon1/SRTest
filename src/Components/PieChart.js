import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Piechart = ({ chartData }) => {

    const COLORS = ['#B8860B', '#435440', '#A39A92', '#000000', '#DC143C', '#00008B', '#8B008B', '#1E90FF', '#4B0082', '#808000', '#FFA500'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <PieChart width={600} height={550}>
            <Pie
                data={chartData}
                cx={300}
                cy={230}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
            >
                {
                    chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Tooltip/>
            <Legend />
        </PieChart>
    );
};

export default Piechart;