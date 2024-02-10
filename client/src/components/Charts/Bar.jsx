import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          foreColor: '#333',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            borderRadius: 10,
          },
        },
        xaxis: {
          labels: {
            show: false, 
          },
        },
        yaxis: {
          labels: {
            show: false, 
          },
        },
        colors: ['#80ed99'],
      },
      series: [
        {
          name: 'Score',
          data: [
            { x: 'John', y: 21, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'Joe', y: 22, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'Jake', y: 10, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'Amber', y: 28, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'Peter', y: 16, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'Mary', y: 21, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'David', y: 13, fill: 'rgba(90, 87, 255, 0.7)' },
            { x: 'Lily', y: 30, fill: 'rgba(90, 87, 255, 0.7)' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div style={{
        backgroundColor:'white'
      }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="180"
          width="100%"
        />
      </div>
    );
  }
}

export default Bar;
