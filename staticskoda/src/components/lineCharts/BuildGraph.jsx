import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import { months } from "../../data/months";

Chart.register(CategoryScale);

export default function ShowGraph() {
    const labels = months.map(m => m.currentMonth);
    const chartData = {
        labels,
        datasets: [
            {
                label: "Monthly Milage",
                yAxisID: "milage",
                data: months.map(m => m.max),
                backgroundColor: ["blue"],
                borderColor: "blue",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "Actual Milage",
                yAxisID: "milage",
                data: months.map(m => m.actual),
                backgroundColor: ["red"],
                borderColor: "red",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "Percentage",
                yAxisID: "percentage",
                data: months.map(m => m.percentage),
                borderColor: "#0D392E",
                backgroundColor: ["#0D392E"],
                borderWidth: 2,
                pointRadius: 0
            }
        ]
    };

    return (
        <div className="App">
            <LineChart chartData={chartData} />
        </div>
    );
}