import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const sampleData = [
  { x: new Date('2024-04-28T00:00:00Z'), y: 30 },
  { x: new Date('2024-04-28T01:00:00Z'), y: 40 },
  { x: new Date('2024-04-28T02:00:00Z'), y: 35 },
  // Add more sample data as needed
];



const SentimentAnalysisGraph = (props) => {
  const { recieveData } = props;
  useEffect(() => {
    const options = {
  series: [
    {
      data: sampleData,
    },
  ],
  chart: {
    id: 'realtime',
    height: 250,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors: ['#ff6700'],
  },
  title: {
    text: 'Sentiment Analysis',
    align: 'centre',
    style: {
      color: '#000', // Set title color
    },
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        colors: '#000', // Set X-axis label color
      },
    },
    axisBorder: {
      color: '#000', // Set X-axis color
    },
    // Define your X axis range here
    // range: XAXISRANGE,
  },
  yaxis: {
    max: 100,
    labels: {
      style: {
        colors: '#000', // Set Y-axis label color
      },
    },
    axisBorder: {
      color: '#000', // Set Y-axis color
    },
  },
  legend: {
    show: false,
  },
};
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Update chart data at intervals
    const interval = setInterval(() => {
      // Simulating new data
      const newData = sampleData.map((point) => ({
        x: new Date(point.x.getTime() + 3600 * 1000), // Adding an hour
        y: Math.floor(Math.random() * (90 - 10 + 1)) + 10, // Random value between 10 and 90
      }));

      chart.updateSeries([
        {
          data: newData,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return <div id='chart' style={{ background: '#FFF', padding: '10px' }}></div>;
};

export default SentimentAnalysisGraph;