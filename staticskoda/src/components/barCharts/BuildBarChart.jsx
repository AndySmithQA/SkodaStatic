import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "./BarChart";
import { months } from "../../data/months";

Chart.register(CategoryScale);

export default function ShowBarGraph() {
    // Split years (first 12 entries year1, remainder year2)
    const year1 = months.slice(0, 12);
    const year2 = months.slice(12);
    const labels = year1.map(m => m.currentMonth.split("-")[0]);

    const chartData = {
        labels,
        datasets: [
            {
                type: "bar",
                label: "Year 1",
                data: year1.map(m => m.monthlyMilage),
                backgroundColor: "#0D392E",
                order: 2,
                stack: 1
            },
            {
                type: "bar",
                label: "Year 2",
                data: year2.map(m => m.monthlyMilage),
                backgroundColor: "#CED7E5",
                order: 2,
                stack: 0
            },
            {
                type: "line",
                label: "Max Allowance",
                data: months.map(m => m.maxAllowance),
                order: 1,
                backgroundColor: "red",
                borderColor: "red",
                pointRadius: 0
            }
        ]
    };

    return (
        <div className="App">
            <BarChart chartData={chartData} />
        </div>
    );
}