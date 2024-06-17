import React from 'react';
import HorizontalGraph from './Horizontal';

const HorizontalGraphs = () => {
  return (
    <div>
      <h2>Booking throughout the Year</h2>
      <HorizontalGraph
        data_1={[
          3000, 6000, 8000, 2000, 10000, 4367, 19000, 9864, 8734, 29547, 37689, 4534, 10000
        ]}
        title_1="Revenue"
        bgColor_1="rgb(0,155,255)"
        horizontal={true}
        data_2={[]}
        title_2={""}
        bgColor_2={""}
      />
    </div>
  );
};

export default HorizontalGraphs;
