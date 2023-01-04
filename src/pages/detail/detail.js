import React from "react";
import { useParams } from "react-router-dom";

function Service() {
  let { id } = useParams();

  return <div>Service Page for {id}</div>;
}

export default Service;
