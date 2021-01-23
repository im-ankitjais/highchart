import React, { Component } from 'react';
import './App.css';
import Highcharts from 'highcharts';
// import BarChart from './BarChart';
const borderRadius = require("highcharts-border-radius");
borderRadius(Highcharts);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
  
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}

class App extends Component {
  render() {
    // const options = {
    //   title: {
    //     text: 'Fruit Consumption',
    //   },
    //   xAxis: {
    //     categories: [
    //       'Apples',
    //       'Bananas',
    //       'Oranges',
    //       'Pineapples',
    //       'Blueberries',
    //     ],
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Fruit eaten',
    //     },
    //   },
    //   chart: {
    //     type: 'line',
    //   },
    //   series: [
    //     {
    //       name: 'Jane',
    //       data: [1, 0, 4, 0, 3],
    //     },
    //     {
    //       name: 'John',
    //       data: [5, 7, 3, 2, 4],
    //     },
    //     {
    //       name: 'Doe',
    //       data: [0, 0, 0, 1, 0],
    //     },
    //   ],
    // };
const options = {
  title: {
    text: 'Chart.update'
  },
  subtitle: {
    text: 'Plain'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  plotOptions: {
    column: {
      borderRadiusTopLeft: 7,
      borderRadiusTopRight: 7,
    },
  },
  series: [{
    color: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
          [0, '#21209c'], // start
          [0.2, '#0d53b7'], // middle
          [1, 'rgb(54, 162, 235)'] // end
      ]
  },
    type: 'column',
    borderWidth: 2,
    colorByPoint: false,
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    showInLegend: false
  }]
}
    return (
      <div className="App">
        <div className="chart-contain">
        <Chart options={options} />
        </div>
        {/* <BarChart /> */}
      </div>
    );
  }
}

export default App;
