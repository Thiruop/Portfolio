import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "../css/ExperienceSection.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ExperienceBarChart() {
  const data = {
    labels: ["MERN Stack", "Oracle Integration Cloud", "MySQL", "Python"],
    datasets: [
      {
        label: "Skill Rating (out of 5)",
        data: [4, 5, 4, 3.5],
        backgroundColor: "rgba(255, 204, 0, 0.6)",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}/5`;
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 5,
        ticks: { color: "#fff", stepSize: 1 },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="glass-card p-4 mb-4">
      <div className="mb-3 text-white">
        <h5 className="mb-1">Company: NearTekPod APAC</h5>
        <p className="mb-0">Feb 5, 2024 – Present</p>
        <strong>Role: Associate Software Engineer</strong>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
