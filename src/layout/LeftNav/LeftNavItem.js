import React from "react";
import { animated, useSpring } from "react-spring";
import LeftNavItemChild from "./LeftNavItemChild";
import { Link, useLocation } from "react-router-dom";

function LeftNavItem({
  item,
  isSelected,
  handleSetSelectedItemId,
  expandedSidebar,
  handleSwitchTheme,
  handleToggleSidebar,
}) {
  const location = useLocation();

  const itemAnimation = useSpring({
    mass: 5,
    tension: 2000,
    friction: 200,
    transform: isSelected ? "rotate(90deg)" : "rotate(0deg)",
  });

  const itemNameAnimation = useSpring({
    mass: 5,
    tension: 2000,
    friction: 200,
    opacity: expandedSidebar ? 1 : 0,
  });

  const itemChildrenAnimation = useSpring({
    delay: 200,
    opacity: isSelected && expandedSidebar ? 1 : 0,
  });

  return (
    <li onClick={() => handleSetSelectedItemId(item.id)}>
      <div className={`list-item-parent ${isSelected ? "active" : ""}`}>
        <Link to={item.link ? item.link : location.pathname}>
          <img
            src={item.icon}
            className="img-icon"
            alt={item.name}
            title={item.name}
          />
        </Link>

        {expandedSidebar && (
          <div className="list-item-has-children">
            <Link to={item.link ? item.link : location.pathname}>
              <animated.span style={itemNameAnimation}>
                {item.name}
              </animated.span>
            </Link>

            {item.children && expandedSidebar && (
              <animated.img
                src={`/appAssets/${item.secondaryIcon}.svg`}
                alt="dropdown-item"
                className="img-icon"
                style={itemAnimation}
              />
            )}
          </div>
        )}
      </div>
      {item.children && (
        <animated.div
          style={itemChildrenAnimation}
          className={expandedSidebar ? "" : "hide"}
        >
          <LeftNavItemChild
            item={item.children}
            isSelected={isSelected}
            expandedSidebar={expandedSidebar}
            handleSwitchTheme={handleSwitchTheme}
            location={location}
            handleToggleSidebar={handleToggleSidebar}
          />
        </animated.div>
      )}
    </li>
  );
}

export default LeftNavItem;
