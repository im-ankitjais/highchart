

import React from 'react'
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
function BarChart() {
    Exporting(Highcharts);

    const chart = Highcharts.chart('container', {
        title: {
          text: 'Chart.update'
        },
        subtitle: {
          text: 'Plain'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          showInLegend: false
        }]
      });
      
    return (
        <div>
        <figure className="highcharts-figure">
            <div id="container">{chart}</div>
        </figure>
        </div>
    )
}

export default BarChart
