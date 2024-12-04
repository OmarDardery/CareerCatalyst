import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart(props) {
    const scoresAndNames = props.cognitiveFunctions.map(cognitiveFunction => ({
        name: cognitiveFunction.name,
        score: (((cognitiveFunction.score / 64) * 200) - 100),
    }));

    const labels = scoresAndNames.map(item => item.name);
    const scores = scoresAndNames.map(item => item.score);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Cognitive Function Scores",
                data: scores,
                backgroundColor: scores.map(score =>
                    score >= 0 ? "rgba(75, 192, 192, 0.5)" : "rgba(255, 99, 132, 0.5)"
                ),
                borderColor: scores.map(score =>
                    score >= 0 ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)"
                ),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.2, // Keeps a decent aspect ratio for various screen sizes
        scales: {
            y: {
                beginAtZero: false,
                min: -100,
                max: 100,
                title: {
                    display: true,
                    text: "Score Range",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Cognitive Functions",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw.toFixed(2)}`;
                    },
                },
            },
        },
    };

    return (
        <div className="chart" style={{ width: "80%", maxWidth: "600px", fontSize: "2vw"}}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default Chart;
