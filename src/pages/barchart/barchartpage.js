import React, { useState, useEffect } from "react";
import { getDataHelper } from "../../helpers/api";
import BarChart from "../../charts/BarChart/BarChart";
import Spinner from "../../layout/Spinner/Spinner";

const BarchartPage = () => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    const res = await getDataHelper();
    setData(res);
    setIsLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home padding">
      {!isLoaded && <Spinner size="large" />}
      {isLoaded &&
        data.map((d, index) => (
          <div className="item" key={index}>
            <h3>{d["attributes(id)"]}</h3>
            <BarChart
              id="barchart"
              data={d["metrics(calls_per_minute){avg}"]
                .map((dd) => dd.avg)
                .slice(0, 20)}
            />
          </div>
        ))}
    </div>
  );
};

export default BarchartPage;
