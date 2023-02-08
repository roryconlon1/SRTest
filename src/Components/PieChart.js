import React from "react";
import { Pie, PieChart } from "recharts";

const Piechart = ({chartData}) => {


    return(
        <PieChart width={1000} height={400}>
            <Pie 
            dataKey="value"
            isAnimationActive={false}
            data={chartData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label/>
        </PieChart>
    )
}

export default Piechart;