import React from 'react'
import Chart from "react-apexcharts";
const Worldwide = ({ heading }) => {
  const chartData = {
    series: [
      {
        name: "USA",
        data: [80, 30, 55, 65, 60, 80, 95],
      },
      {
        name: "UK",
        data: [8, 35, 40, 60, 70, 55, 75],
      },
      {
        name: "AU",
        data: [12, 25, 45, 55, 65, 70, 60],
      },
    ],

    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 4,
          gap: 100,
        },
      },




      xaxis: {
        categories: [
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
      },

      legend: {
        position: "top",
        labels: {
          colors: "(--foreground)",
        },

      },

      colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
    },
  };
  return (
    <div>
      <div className="bg-(--background) p-6 rounded-2xl shadow-md overflow-hidden">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-md font-semibold text-(--foreground)">{heading}</h2>

          <button className="text-(--foreground) font-medium">
            Show All
          </button>
        </div>

        <div className="relative z-0">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Worldwide