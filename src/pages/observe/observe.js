import React, { useState, useEffect } from "react";
import { getMockData } from "../../helpers/api";
import { sparklineOptions } from "../../helpers/config";
import Sparkline from "../../highcharts/Sparkline/Sparkline";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./observe.scss";

const Observe = ({ pathname }) => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [data, pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`home page-padding ${!isLoaded ? "center-all" : ""}`}>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <table className="data-table">
          <thead>
            <tr>
              <th width={windowWidth * 0.3}>Domain</th>
              <th width={windowWidth * 0.2}>Entities</th>
              <th width={windowWidth * 0.5}>Performance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr
                className="list-item"
                key={`${d['attributes("service.name")']}${index}`}
              >
                <td className="item-name">
                  <Link to={`detail/${d['attributes("service.name")']}`}>
                    {d['attributes("service.name")']}
                  </Link>
                </td>
                <td>{d.type}</td>
                <td id="last-child" width={windowWidth * 0.4}>
                  <Sparkline
                    data={getObjectData(d)}
                    options={sparklineOptions}
                    width={windowWidth * 0.5}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Observe;
