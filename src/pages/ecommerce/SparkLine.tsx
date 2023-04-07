import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const faker = [110, 300, 400, 200, 500, 600, 800];
export const data = {
  labels,
  datasets: [
    {
      label: "data",
      data: faker,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
 
    tooltip: {
      displayColors: false,
      backgroundColor: "black",
      callbacks: {
        title: () => "",
        afterBody: () => "",
      },
    },
    indexAxis: "x",

    // chart based on x-axis
  },
};

export function SparkLine() {
  return <Line options={options} data={data} />;
}
