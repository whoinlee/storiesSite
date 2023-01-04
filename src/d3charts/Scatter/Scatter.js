import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import AxisLeft from "./AxisLeft";
import AxisBottom from "./AxisBottom";

const RandomData = (data) => {
  const rData = data.map((d) => {
    return {
      x: Math.random() * d.x,
      y: Math.random() * d.y,
      temp: Math.random() * d.temp,
    };
  });
  return rData;
};

const Scatter = ({ data: propsData }) => {
  const [data, setData] = useState(propsData);
  const [open, toggle] = useState(false);
  const props = useSpring({
    from: { r: 0, fill: "lightblue" },
    to: { r: open ? 10 : 5, fill: open ? "purple" : "lightblue" },
  });

  const w = window.innerWidth - 100,
    h = window.innerHeight - 100,
    margin = {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    };

  const width = w - margin.right - margin.left,
    height = h - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, (d) => d.x))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.y))
    .range([height, 0]);

  function handleClick(e) {
    setData(RandomData(propsData));
    if (open) {
      toggle(false);
    } else {
      toggle(true);
    }
  }

  const circles = data.map((d, i) => (
    <animated.circle
      key={i}
      r={props.r}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      style={{ fill: props.fill }}
    />
  ));

  return (
    <div>
      <h1>React + D3 + React Spring</h1>
      <button onClick={handleClick}>Click Me</button>
      <svg width={w} height={h}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisLeft yScale={yScale} width={width} />
          <AxisBottom xScale={xScale} height={height} />
          {circles}
        </g>
      </svg>
    </div>
  );
};

export default Scatter;
