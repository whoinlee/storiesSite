import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Sparkline = ({ data, options, width }) => {
  if (data?.length > 0)
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...options, series: [{ data }] }}
      />
    );
};

export default Sparkline;
