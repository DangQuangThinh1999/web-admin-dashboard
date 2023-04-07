import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Stacked",
    },
  },
  responsive: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
  dataIndex: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const dataOne = [100, 200, 300, 400, 400, 400, 400, 400];
const dataTwo = [300, 500, 600, 700, 700, 700, 700, 700];

export const data = {
  labels,
  datasets: [
    {
      label: "Budget",
      data: dataOne,
      backgroundColor: "rgb(74 222 128)",
    },
    {
      label: "Expense",
      data: dataTwo,
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export default function Stacked() {
  return <Bar width={"auto"} height={"550px"} options={options} data={data} />;
}
