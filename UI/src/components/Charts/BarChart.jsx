import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import "./chart.css"

const Barchart = () => {
  return (
    <div className="chart-box">
      <BarChart
        series={[
          { data: [10, 12, 8, 15], label: 'Doping Violations' },
          { data: [50, 45, 60, 40], label: 'Monitored Athletes' },
          { data: [30, 35, 25, 20], label: 'Sample Collections' },
          { data: [5, 7, 6, 8], label: 'Positive Test Results' },
        ]}
        height={290}
        xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
        // margin={{ top: 10, bottom: 60, left: 50, right: 20 }} // Increased bottom margin for labels
        barGap={2} // Adds spacing between bars
        labelPosition="bottom" // Keeps the labels below the bars
      />
    </div>
  );
}

export default Barchart;
