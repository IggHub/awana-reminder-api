import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, time: 9 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
];

export default class ScoreCharts extends React.Component{
  render(){
    const scoreData = this.props.scoreData;
    scoreData.forEach((score) => {
      score.point = Number(score.point);
    })
    return (
      <div>
        <LineChart width={600} height={300} data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey={"point"} stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <button onClick={() => {console.log(this.props.scoreData)}}>Scores data</button>
      </div>
    )
  }
}
