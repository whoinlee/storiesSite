import React, { useState, useEffect } from "react";
import { getDataHelper, getMockData } from "../../helpers/api";
import Sparkline from "../../highcharts/Sparkline/Sparkline";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./home.scss";

const tableSetUp = [
  {
    type: "Domain",
    th: [
      { name: "Domain", width: 0.3 },
      { name: "Entities", width: 0.2 },
      { name: "Performance", width: 0.5 },
    ],
  },
];

const Home = () => {
  const [data, setData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getData = async () => {
    if (data) return;
    const res = await getMockData();
    setData(res);
  };

  const getObjectData = (d) => {
    const dd = d["metrics( apm:response_time, 'sys:derived')"].data.data;
    const res = dd?.map((ddd) => ddd[1] / 300000000);
    return [].concat(...res);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    getData();
  }, [data]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`home page-padding ${!data ? "center-all" : ""}`}>
      {!data && <Loader />}
      {data && <h1>Dashboard coming...</h1>}
    </div>
  );
};

export default Home;
