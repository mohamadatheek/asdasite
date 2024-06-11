import { ChartData, ChartOptions } from "chart.js";
export const BestPerformermers: ChartData<"bar"> = {
  labels: ["Biology", "Chemistry", "Physics"],
  datasets: [
    {
      label: "A",
      data: [40, 78, 48],
      backgroundColor: "#6ac1ad",
      //   borderColor: "white",
      borderWidth: 1,
    },
    {
      label: "B",
      data: [49, 78, 53],
      backgroundColor: "#52afe4",
      //   borderColor: "white",
      borderWidth: 1,
    },

    {
      label: "C",
      data: [144, 152, 112],
      backgroundColor: "#f8d855",
      //   borderColor: "white",
      borderWidth: 1,
    },
  ],
};



export const Groupoptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white", // Legend text color
      },
    },
    title: {
      display: true,
      color: "white", // Title text color
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", // X-axis label color
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // X-axis grid line color
      },
    },
    y: {
      ticks: {
        color: "white", // Y-axis label color
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Y-axis grid line color
      },
    },
  },
};



export const optionsLine: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", 
      },
      grid: {
        display: false, 
      },
      border: {
        color: "white", 
      },
    },
    y: {
      ticks: {
        color: "white", 
      },
      grid: {
        display: false, 
      },
      border: {
        color: "white", 
      },
    },
  },
};