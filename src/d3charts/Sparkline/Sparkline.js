import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
/* import {
  line as d3_line,
  area as d3_area,
  curveBumpX as d3_curveBumpX,
  range as d3_range,
  select as d3_select,
  scaleLinear as d3_scaleLinear,
} from "d3"; */

const Sparkline = ({ assignedRef }) => {
  const sparkLine = useRef();
  useEffect(() => {
    const WIDTH = 200;
    const HEIGHT = 30;
    const MARGIN = { top: 5, right: 5, bottom: 5, left: 5 };
    const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
    const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
    const DATA_COUNT = 40;
    const data = d3.range(DATA_COUNT).map((d) => Math.random());
    const x = d3.scaleLinear().domain([0, DATA_COUNT]).range([0, INNER_WIDTH]);
    const y = d3.scaleLinear().domain([0, 1]).range([INNER_HEIGHT, 0]);

    const svg = d3
      .select(sparkLine.current)
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT)
      .append("g")
      .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

    /* Area */
    const areaGenerator = d3
      .area()
      .x((d, i) => x(i))
      .y((d) => y(d))
      .y0(HEIGHT)
      .curve(d3.curveBumpX);

    svg
      .append("path")
      .datum(data)
      .attr("d", areaGenerator)
      .attr("fill", "purple");

    const line = d3
      .line()
      .x((d, i) => x(i))
      .y((d) => y(d));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#bbb")
      .attr("stroke-width", 2)
      .attr("d", line);
    /* svg
      .append("circle")
      .attr("r", 2)
      .attr("cx", x(0))
      .attr("cy", y(data[0]))
      .attr("fill", "steelblue");
    svg
      .append("circle")
      .attr("r", 2)
      .attr("cx", x(DATA_COUNT - 1))
      .attr("cy", y(data[DATA_COUNT - 1]))
      .attr("fill", "tomato"); */
  }, []);

  return <div ref={sparkLine} />;
};

export default Sparkline;
