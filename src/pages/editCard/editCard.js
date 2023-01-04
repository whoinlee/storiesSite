import React, { useState } from "react";
import { editData, actions } from "../../helpers/componentShowcase";
import Card from "../../layout/Card/Card";
import Toast from "../../components/Toast/Toast";
import "./editCard.scss";

function EditCard() {
  const [data, setData] = useState(editData);
  const [toastObject, setToastObject] = useState(null);

  const handleSaveEditedData = (dataToSave, id) => {
    setToastObject({
      type: "success",
      title: "Successfully Saved",
      body: "This toast will disappear automatically within 3.5 seconds.",
    });
    const newData = data.map((d) => {
      if (d.id === id) {
        d.data = [...dataToSave];
      }
      return d;
    });
    setData(newData);
  };

  const handleDismissToast = () => {
    setToastObject(null);
  };

  return (
    <>
      {toastObject && (
        <>
          <Toast
            type="success"
            title="Successfully Saved"
            handleDismissToast={handleDismissToast}
            time={3500}
          />
        </>
      )}
      <div className="edit-card">
        {data.map((e) => (
          <div key={`e.id ${Math.random()}`}>
            <Card
              type="InputCard"
              id={e.id}
              title={e.title}
              actions={actions}
              data={[...e.data]}
              handleSaveEditedData={handleSaveEditedData}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default EditCard;
