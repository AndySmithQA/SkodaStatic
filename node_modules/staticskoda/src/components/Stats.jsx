import { months } from "../data/months";

export default function Stats() {
    const statMaxMilage = months.map(m => m.monthlyMilage);
    const statTotalMilage = months.map(m => m.actual);
    const maximum = Math.max(...statMaxMilage);
    const minimum = Math.min(...statMaxMilage);
    // Preserve original logic (maximum of actuals) though a sum may be desired.
    const total = Math.max(...statTotalMilage);
    const average = total / statTotalMilage.length;

    return (
        <div className="stats-bar ">
            <div className="container">
                <div className="row align-items-centre">
                    <div className="col-md-12">
                        <ul>
                            <li>Highest Monthly Mileage - {maximum}</li>
                            <li>Lowest Monthly Mileage - {minimum}</li>
                            <li>Average Monthly Mileage - {average.toFixed()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
