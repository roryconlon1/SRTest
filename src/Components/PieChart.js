import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Piechart = ({chartData}) => {

    let renderLabel = function(entry) {
        return entry.name;
    }

    return(
        <PieChart width={3000} height={4000}>
            <Pie 
            dataKey="value"
            isAnimationActive={false}
            data={chartData}
            cx={330}
            cy={300}
            outerRadius={200}
            fill="#8884d8"
            label={renderLabel}/>
            <Tooltip />
        </PieChart>
    )
}

export default Piechart;