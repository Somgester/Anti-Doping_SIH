import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import "./chart.css";

const Linechart = () => {
    return (
        <div className='chart-box'>
            <LineChart
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'], scaleType: 'band' }]} // Using quarters or similar labels
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        label: 'Doping Violations Over Time', // Optional label for clarity
                    },
                ]}
                width={500}
                height={300}
                margin={{ top: 20, bottom: 50, left: 50, right: 20 }} // Added bottom margin for labels
                // Optional additional styling or configurations can be added here
            />
        </div>
    );
}

export default Linechart;
