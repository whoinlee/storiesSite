import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Line = ({ options, data }) => {
  Highcharts.seriesTypes.line.prototype.drawLegendSymbol =
    Highcharts.seriesTypes.area.prototype.drawLegendSymbol;
  if (data.series?.length > 0)
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...options, series: data.series }}
      />
    );
};

export default Line;
