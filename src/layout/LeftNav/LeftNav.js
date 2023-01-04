import React, { useEffect, useState } from "react";
import "./LeftNav.scss";
import { animated, useSpring, config } from "react-spring";
import { menuItems } from "../../helpers/config";
import LeftNavItem from "./LeftNavItem";

const Left = ({ theme, handleSwitchTheme, pathname }) => {
  const getExpandedSidebarState = () => {
    const ls = window.localStorage.getItem("expandedSidebar");
    if (!ls) return false;
    if (ls === "false") return false;
    return true;
  };

  const [expandedSidebar, setExpandedSidebar] = useState(
    getExpandedSidebarState()
  );
  const [selectedItemId, setSelectedItemId] = useState(null);

  const leftMenuAnimation = useSpring({
    config: config.default,
    width: expandedSidebar ? "200px" : "48px",
  });

  const indicatorAnimation = useSpring({
    delay: 10,
    transform: expandedSidebar ? "rotate(180deg)" : "rotate(0deg)",
  });

  const toggleSidebar = () => {
    const newExpandedSidebar = !expandedSidebar;
    setExpandedSidebar(newExpandedSidebar);
    window.localStorage.setItem("expandedSidebar", newExpandedSidebar);
  };

  const handleSetSelectedItemId = (itemId) => {
    setSelectedItemId(itemId);
    if (itemId === menuItems[menuItems.length - 1].id) setExpandedSidebar(true);
  };

  useEffect(() => {
    setExpandedSidebar(getExpandedSidebarState());
    const found = menuItems.find(
      (m) => m.link?.slice(1, m.link.length) === pathname
    );
    if (found) {
      setSelectedItemId(found?.id);
    } else {
      setSelectedItemId(null);
    }
  }, [pathname]);

  return (
    <animated.div className="left" style={leftMenuAnimation}>
      <div className="logo-container" onClick={() => toggleSidebar()}>
        <img
          src="/AppDynamicsLogo_emblem_white.svg"
          className="logo"
          alt="logo"
          title="Expand Menu"
        />
      </div>

      <menu>
        {menuItems.map((m) => (
          <LeftNavItem
            key={m.name}
            item={m}
            isSelected={selectedItemId === m.id}
            handleSetSelectedItemId={handleSetSelectedItemId}
            expandedSidebar={expandedSidebar}
            theme={theme}
            handleSwitchTheme={handleSwitchTheme}
            handleToggleSidebar={toggleSidebar}
          />
        ))}
      </menu>

      <div
        className="toggle-indicator-container"
        onClick={() => toggleSidebar()}
      >
        <animated.img
          src={`/appAssets/double-chevron-right.svg`}
          className="toggle-indicator img-icon"
          style={indicatorAnimation}
        />
      </div>
    </animated.div>
  );
};

export default Left;
