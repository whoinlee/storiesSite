import React from "react";
import Button from "../../components/Button/Button";
import SearchCard from "./SearchCard";

function CardHeader({
  title,
  actions,
  handleToggleEdit,
  toggledEdit,
  close,
  search,
  handleOnSearchChange,
}) {
  const handleClick = (actionName) => {
    if (actionName === "edit") {
      handleToggleEdit(!toggledEdit);
    }
    if (actionName === "more") {
    }
  };
  if (search) {
    return (
      <div className="card-header" style={{ padding: "10px 10px" }}>
        <SearchCard
          placeholder={search}
          handleOnSearchChange={handleOnSearchChange}
        />
      </div>
    );
  } else {
    return (
      <div className="card-header">
        {title}
        {actions && (
          <div className="actions">
            {actions.map((a) => (
              <div key={a.id}>
                <Button icon={a.icon} name={a.name} callback={handleClick} />
                {/* <img
                key={a.id}
                src={a.icon}
                alt={a.name}
                onClick={() => handleClick(a.name)}
                title={a.name}
                className="icon"
              /> */}
              </div>
            ))}
          </div>
        )}
        {close && (
          <Button
            icon="/appAssets/close.svg"
            name="close"
            callback={() => handleToggleEdit(false)}
          />
        )}
      </div>
    );
  }
}

export default CardHeader;
