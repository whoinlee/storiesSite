import React, { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Loader from "../../components/Loader/Loader";
import Checkbox from "../../components/Checkbox/Checkbox";
import DatePicker from "../../components/DatePicker/DatePicker";
import Select from "../../components/Select/Select";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Card from "../../layout/Card/Card";
import {
  componentShowcaseSelectItems,
  actions,
  chartOptions,
  chartData,
  editData,
} from "../../helpers/componentShowcase";
import "./componentShowcase.scss";

function ComponentShowcase() {
  //-- for DatePicker, by WhoIN
  const [date, setDate] = useState(new Date());
  //
  const [cardData, setCardData] = useState(editData);
  const handleEditData = (key, value, selectedId) => {
    const newCardData = cardData.map((c) => {
      if (c.id === selectedId) {
        c[key] = value;
        return c;
      }
      return c;
    });
    setCardData(newCardData);
  };

  return (
    <div className="component-showcase">
      <div className="component">
        <h3>Spinner</h3>
        <div className="component-item">
          <Spinner size="small" />
        </div>
      </div>
      <div className="component">
        <h3>Loader</h3>
        <div className="component-item">
          <Loader />
        </div>
      </div>
      <div className="component">
        <h3>Checkbox</h3>
        <div className="component-item">
          <Checkbox isSelected={true} />
          <Checkbox />
        </div>
      </div>
      <div className="component">
        <h3>Select</h3>
        <div className="component-item">
          <Select
            items={componentShowcaseSelectItems}
            selectedItem={componentShowcaseSelectItems[0]}
          />
        </div>
      </div>
      <div className="component">
        <h3>Card with Chart</h3>
        <div className="component-item">
          <Card
            type="LineChart"
            title="Market Sectors"
            chartOptions={chartOptions}
            data={chartData}
          />
        </div>
      </div>
      <div className="component">
        <h3>Card with Actions</h3>
        <div className="component-item">
          <Card
            type="Table"
            title="Market Sectors"
            actions={actions}
            handleEditData={handleEditData}
          />
        </div>
      </div>
      <div className="component">
        <h3>DatePicker</h3>
        <div className="component-item">
          <DatePicker
            value={date}
            onChange={(date) => {
              setDate(date);
              console.log("onDateChange 1!!!, new date is ", date);
            }}
          />
          <br></br>
          <DatePicker
            value={date}
            onChange={(date) => {
              setDate(date);
              console.log("onDateChange 2!!!, new date is ", date);
            }}
            label="disabled"
            isDisabled={true}
          />
          <br></br>
          <DatePicker
            value={new Date("July 31, 2022 09:00:00")}
            onChange={(date) => {
              setDate(date);
              console.log("onDateChange 3!!!, new date is ", date);
            }}
            label="readOnly-July"
            isReadOnly={true}
          />
        </div>
      </div>
      <div className="component">
        <h3>Breadcrumb</h3>
        <div className="component-item">
          <Breadcrumb
            items={[ 
              {
                label: "Observe",
                href: "http://www.cisco.com",
                tooltip: "Observe"
              }, 
              {
                label: "NoTooltip",
                href: "#",
                tooltip: ""
              },
              {
                label: "Pods",
                href: "https://www.appdynamics.com/",
                tooltip: "Pods - {Entity Status=Active}"
              },
              {
                label: "kube-proxy-dbsp4",
                href: "#",
                tooltip: "current pod"
              }]}
            onClick={(item) => {
              console.log("onBreadcrumb clicked!!!, item is ", item);
              window.open(item.href);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ComponentShowcase;