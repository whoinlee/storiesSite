import React, { useState, useRef } from 'react';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import { formatEmail } from '../../helpers/config';

function DesignsDetailDropdown({ items, config, callback }) {
  const dropdownRef = useRef();

  const [toggled, setToggled] = useState(false);
  useDetectOutsideClick(dropdownRef, () => setToggled(false));

  return (
    <div className='drop-down' ref={dropdownRef}>
      <div className='drop-down-button' onClick={() => setToggled(!toggled)}>
        <img src='/appAssets/more-vertical.svg' alt='select' />
      </div>
      <ul className={toggled ? '' : 'hide'}>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              callback(item);
              setToggled(false);
            }}
          >
            {item.name}
          </li>
        ))}
        <li className='meta'>
          {formatEmail(config).map((f, index) => (
            <div key={`${f}${index}`}>{f}</div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default DesignsDetailDropdown;
