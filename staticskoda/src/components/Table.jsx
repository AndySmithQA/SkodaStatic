import { Table } from 'react-bootstrap';
import { months } from '../data/months';

export default function BuildTable() {
    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Maximum</th>
                    <th>Actual</th>
                    <th>Percentage</th>
                    <th>Difference</th>
                    <th>Milage</th>
                </tr>
            </thead>
            <tbody>
                {months.map(row => (
                    <tr key={row.id}>
                        <td>{row.currentMonth}</td>
                        <td>{row.max}</td>
                        <td>{row.actual}</td>
                        <td>{row.percentage}</td>
                        <td>{row.difference}</td>
                        <td style={{ color: row.monthlyMilage > 666 ? 'red' : 'inherit' }}>
                            {row.monthlyMilage}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}