import React from 'react';
import PropTypes from 'prop-types';
import "./Breadcrumb.scss";


const Breadcrumb = ( {  items, 
                        onClick,
                        isLightTheme
                    } ) => {
  //-- if undefined, takes global setting, data-theme
  let themeClassName = "";
  //-- if value passed, set .breadcrumb class with additional theme className
  if (isLightTheme !== undefined) themeClassName = isLightTheme ? " light" : " dark";

  return (      
      <div className={`breadcrumb${themeClassName}`}>
        {
          items.map((item, index) => {
              const isSelected = (index === items.length-1);
              return (
                <React.Fragment  key={item.href + "-" + index}>
                  <a  className={`breadcrumb__item${isSelected ? " selected" : ""}`}
                      href={item.href}
                      data-tooltip={item.tooltip}
                      onClick={e => {e.preventDefault();onClick && onClick(item);}}
                  >{item.label}</a>
                { !isSelected && 
                  <span className="breadcrumb__separator" />
                }
                </React.Fragment>
              )
            }
          )
        }
      </div>
  )
}

Breadcrumb.propTypes = {
  //-- sets the array of breadcrumb data objects
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,  //-- breadcrumb content
      href: PropTypes.string,   //-- target location
      tooltip: PropTypes.string //-- tootltip content
    })
  ).isRequired,
  //-- handles the 'click' event for when a breadcrumb is selected
  onClick: PropTypes.func,
  //-- whether it's light or dark theme. if undefined, takes the global setting, data-theme
  isLightTheme: PropTypes.bool,
}

export default Breadcrumb;