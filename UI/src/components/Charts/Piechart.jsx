import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import "./chart.css";

const Piechart = () => {
    return (
        <div className='chart-box'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 30, label: 'Doping Violations' },
                            { id: 1, value: 50, label: 'Monitored Athletes' },
                            { id: 2, value: 10, label: 'Positive Test Results' },
                            { id: 3, value: 10, label: 'Pending Investigations' },
                        ],
                    },
                ]}
                // width={400}
                height={300}  // Adjusted for better view
                // margin={{ top: 20, bottom: 20, left: 20, right: 20 }}  // Adds margins for spacing
            />
        </div>
    )
}

export default Piechart;
