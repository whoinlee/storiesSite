import React, { useEffect, useState } from "react";
import Scatter from "../../d3charts/Scatter/Scatter";
import { getDataHelper } from "../../helpers/api";
import "./scatterpage.scss";

const Scatterpage = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await getDataHelper();

    const formattedData = res.map((d) =>
      d["metrics(calls_per_minute){avg}"].map((dd) => dd.avg).flat(1)
    );

    const flattenedData = [].concat(...formattedData);

    const scatterData = flattenedData.map((f) => ({
      x: Math.random() * 40,
      y: Math.random() * 40,
      temp: f * 500,
    }));
    setData(scatterData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <div className="scatter-page padding">
        <Scatter data={data} />
      </div>
    )
  );
};

export default Scatterpage;
