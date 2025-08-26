import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, position: 'Bottom', background: 'white' }}
      height={height}
      width='300px'
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Category"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="60%"
          startAngle={0}
          endAngle={360}
          radius="90%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: false,
            name: 'text',
            position: 'Outside',
            font: {
              fontWeight: '600',
              color: '#000',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;
