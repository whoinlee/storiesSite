import React from "react";
import { Link } from "react-router-dom";

function LeftNavItemChild({
  item,
  handleSwitchTheme,
  location,
  handleToggleSidebar,
}) {
  const handleFunc = (child) => {
    if (child.name === "Switch Theme") handleSwitchTheme();
    if (child.toggleSidebar === "true") handleToggleSidebar();
  };
  return (
    <div className="list-item-child-container">
      {item.map((c) => (
        <div key={c.category} className="list-item-child">
          <label className="label-uppercase">{c.category}</label>
          <menu>
            {c.children.map((cc) => (
              <li key={cc.name} onClick={() => handleFunc(cc)}>
                <Link to={cc.link ? cc.link : location.pathname}>
                  {cc.name}
                </Link>
              </li>
            ))}
          </menu>
        </div>
      ))}
    </div>
  );
}

export default LeftNavItemChild;
