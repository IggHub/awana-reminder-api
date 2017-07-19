import React from 'react';

import { LineChart,
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip } from 'recharts';


const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, time: 9 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
];

class IndividualLineCharts extends React.Component{
  render(){
    const scoreData = this.props.scoreData.slice();
    scoreData.forEach((score) => {
      score.point = Number(score.point);
    })

    return (
      <div>
        <LineChart width={600} height={200} data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey={"point"} stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    )
  }
}

class AverageLineCharts extends React.Component {
  render(){
    const scoreData = this.props.scoreData.slice();
    const averageScoreData = this.props.averageScores.slice();
    scoreData.forEach((score, index) => {
      score.point = Number(score.point);
      score.averagePoint = Number(averageScoreData[index].averagePoint)
    })

    return (
      <div>
        <AreaChart width={750} height={200} data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

          <defs>
            <linearGradient id="colorPoint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorAveragePoint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <Area type="monotone" dataKey="point" stroke="#8884d8" fillOpacity={1} fill="url(#colorPoint)" />
          <Area type="monotone" dataKey="averagePoint" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAveragePoint)" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    )
  }
}

class CumulativeLineCharts extends React.Component {
  render(){
    const scoreData = this.props.scoreData.slice();
    const cumulativeScoreData = this.props.cumulativeScores.slice();

    scoreData.forEach((score, index) => {
      score.point = Number(score.point);
      score.cumulativePoint = Number(cumulativeScoreData[index].cumulativePoint)
    })
    return (
      <div>
        <LineChart width={750} height={200} data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

          <Line type="monotone" dataKey="winPoint" stroke="#82ca9d" />
          <Line type="monotone" dataKey="cumulativePoint" stroke="#8884d8" activeDot={{r: 8}}/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    )
  }
}

const styles = {
  chartWrapper: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    width: '850px',
    padding: '25px',
		background: '#FFFFFF',
    zIndex: '5',
    transform: 'translateY(-50%) translateX(-50%)',
    border: '1px solid black'
  }
}
export default class ScoreCharts extends React.Component{
  render(){
    const revealOnlySelectedData = (this.props.index === this.props.selectedChartId) ? <div><AverageLineCharts scoreData={this.props.scoreData} averageScores={this.props.averageScores} /> <CumulativeLineCharts scoreData={this.props.scoreData} cumulativeScores={this.props.cumulativeScores} /></div> : <div></div>
    const showChart= <IndividualLineCharts scoreData={this.props.scoreData} />
    return (
      <div style={styles.chartWrapper} onClick={(id) => this.props.toggleDisplayChart(this.props.index)}>

        {revealOnlySelectedData}

      </div>
    )
  }
}
