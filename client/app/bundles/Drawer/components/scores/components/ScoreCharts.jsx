import React from 'react';

import { LineChart,
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ReferenceLine,
    Legend,
    ResponsiveContainer,
    Tooltip } from 'recharts';

import {Tabs, Tab, Button} from 'react-bootstrap';

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
        <ResponsiveContainer aspect={5}>
          <AreaChart data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
            <Legend verticalAlign="bottom" height={36}/>
          </AreaChart>
        </ResponsiveContainer>
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
        <ResponsiveContainer aspect={5}>
          <LineChart data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="winPoint" stroke="#82ca9d" />
            <Line type="monotone" dataKey="cumulativePoint" stroke="#8884d8" activeDot={{r: 8}}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={35} label="Goal" stroke="red" strokeDasharray="3 3" />
            <Legend verticalAlign="bottom" height={36}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

class ChartsContainer extends React.Component {
  render(){
    return (
      <div style={styles.chartWrapper} onClick={(id) => this.props.toggleDisplayChart(this.props.index)}>
        <div style={styles.chartContainer}>
          <h2>Average Point Chart</h2>
          <AverageLineCharts scoreData={this.props.scoreData} averageScores={this.props.averageScores} />
          <h2>Cumulative Point Chart</h2>
          <CumulativeLineCharts scoreData={this.props.scoreData} cumulativeScores={this.props.cumulativeScores} />
          <Button bsStyle="danger" onClick={(id) => this.props.toggleDisplayChart(this.props.index)}>Close</Button>
        </div>
      </div>
    )
  }
}

const styles = {
  chartWrapper: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    width: '75%',
    height: '75%',
    margin: '0',
    padding: '25px',
    zIndex: '1',
    transform: 'translateY(-50%) translateX(-50%)'
  },
  chartContainer: {
    padding: "10px",
    background: "#ffffff",
    borderWidth: "10px",
    zIndex: '2',
    position: 'relative'
  }
}

export default class ScoreCharts extends React.Component{
  render(){
    const revealOnlySelectedData = (this.props.index === this.props.selectedChartId) ? <ChartsContainer toggleDisplayChart={this.props.toggleDisplayChart} index={this.props.index} scoreData={this.props.scoreData} averageScores={this.props.averageScores} cumulativeScores={this.props.cumulativeScores} /> : <div></div>

    return (
      <div>

        {revealOnlySelectedData}

      </div>
    )
  }
}
