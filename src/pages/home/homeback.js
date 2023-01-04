import React, { useState, useEffect } from "react";
import { getDataHelper } from "../../helpers/api";
import Sparkline from "../../highcharts/Sparkline/Sparkline";
import Loader from "../../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    if (data) return;
    const res = await getDataHelper();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className={`home ${!data ? "center-all" : ""}`}>
      {!data && <Loader />}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Entities</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="list-item" key={d["attributes(id)"]}>
                <td className="item-name">
                  <Link to={`services/${d["attributes(id)"]}`}>
                    {d["attributes(id)"]}
                  </Link>
                </td>
                <td>{d["attributes(environment)"]}</td>
                <td>
                  <Sparkline
                    data={d["metrics{calls_per_minute)"].map((d) => d.avg)}
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

export default Home;
