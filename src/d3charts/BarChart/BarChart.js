import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ id, data, width = 1250, height = 300 }) => {
  const bChart = useRef();
  useEffect(() => {
    const svg = d3
      .select(bChart.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("margin-left", 100);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 20)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");
  }, [id, data, width, height]);

  return <div ref={bChart} />;
};

export default BarChart;
