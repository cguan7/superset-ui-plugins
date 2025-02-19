/* eslint-disable no-magic-numbers */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import data from './data';
import dummyDatasource from '../../../shared/dummyDatasource';

export default [
  {
    renderStory: () => (
      <div className="container">
        <h2>yAxisBounds</h2>
        <pre>yAxisBounds=undefined</pre>
        <SuperChart
          chartType="line"
          width={400}
          height={200}
          datasource={dummyDatasource}
          payload={{ data }}
          formData={{
            richTooltip: true,
            showLegend: false,
            vizType: 'line',
          }}
        />
        <pre>yAxisBounds=[0, 60000]</pre>
        <SuperChart
          chartType="line"
          width={400}
          height={200}
          datasource={dummyDatasource}
          payload={{ data }}
          formData={{
            richTooltip: true,
            showLegend: false,
            vizType: 'line',
            yAxisBounds: [0, 60000],
          }}
        />
        <pre>yAxisBounds=[null, 60000]</pre>
        <SuperChart
          chartType="line"
          width={400}
          height={200}
          datasource={dummyDatasource}
          payload={{ data }}
          formData={{
            richTooltip: true,
            showLegend: false,
            vizType: 'line',
            yAxisBounds: [null, 60000],
          }}
        />
        <pre>yAxisBounds=[40000, null]</pre>
        <SuperChart
          chartType="line"
          width={400}
          height={200}
          datasource={dummyDatasource}
          payload={{ data }}
          formData={{
            richTooltip: true,
            showLegend: false,
            vizType: 'line',
            yAxisBounds: [40000, null],
          }}
        />
        <pre>yAxisBounds=[40000, null] with Legend</pre>
        <SuperChart
          chartType="line"
          width={400}
          height={200}
          datasource={dummyDatasource}
          payload={{ data }}
          formData={{
            richTooltip: true,
            showLegend: true,
            vizType: 'line',
            yAxisBounds: [40000, null],
          }}
        />
      </div>
    ),
    storyName: 'yAxisBounds',
    storyPath: 'legacy-|preset-chart-nvd3|LineChartPlugin',
  },
];
