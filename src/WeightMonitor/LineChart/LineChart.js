
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';
import useFetch from '../../useFetch';
import { Data } from '../../Utils/data';
import { useState } from 'react';
import 'chartjs-adapter-luxon';
//import 'chartjs-adapter-date-fns';
const LineChart = () => {
  const { dataList } = useFetch('http://localhost:8000/weight');
  console.log(dataList);
  ChartJS.register(
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  //const labels = [];  

  const [chartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "User Body Fat ",
        data: Data.map((data) => data.bodyFat),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2
        /**  you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)'
        ],

        //borderColor: "black",
        */
      },
      {
        label: "Users Weight ",
        data: Data.map((data) => data.userWeight),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 2
      }
    ]
  });

  const options = {
    responsive: true,//not necessary
    plugins: {
      title: {
        display: true,
        text: "User weight and body fat summary"
      },
      legend: {
        //display: false
        position: 'top'
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          // Luxon format string
          //unit: 'day',
          displayFormats: {
            day: 'DD HH:mm:ss'
          },
          tooltipFormat: 'DD T',
        },
        title: {
          display: true,
          text: 'Dates of the year'
        }
      },
      y: {
        //beginAtZero: false
        //max : 100,
        min: 45
      }
    }
  }

  /*

  const data = {
    datasets: [
      {
        label: 'Weight chart',
        data: [
          {
            x: '1',
            y: 20
          },
          {}
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'weight'
        }
      },
      {
        label: 'Body fat',
        data: labels.map(() => 12),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const data3 = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
  }

  const option3 = {

    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020"
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          // Luxon format string
          //unit: 'day',
          displayFormats: {
            day: 'DD HH:mm:ss'
          }
        }
      },
      y: {
        //beginAtZero: false
        //max : 100,
        min: 45
      }
    }
  }  
*/  



  return (
    <div style={{ width: '1000px', height: '800px', padding: '20px' }}>
      <Line options={options} data={chartData} />
    </div>

  );
}

export default LineChart;