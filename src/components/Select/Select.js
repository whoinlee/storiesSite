import React, { useState, useRef } from 'react';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import './Select.scss';

function Select({ items, selectedItem, callback, id, placeholder, label }) {
  const selectRef = useRef();

  const [toggled, setToggled] = useState(false);
  const [selected, setSelected] = useState(selectedItem);
  useDetectOutsideClick(selectRef, () => setToggled(false));

  const handleSetSelected = (item) => {
    setToggled(!toggled);
    setSelected(item);
    if (callback) callback(item, id);
  };

  return (
    <div className='select' ref={selectRef}>
      <div className='selected-item' onClick={() => setToggled(!toggled)}>
        {selected ? (
          `${label ? `${label}: ` : ''}${selected.displayName || selected.name}`
        ) : (
          <span className='faded'>{placeholder}</span>
        )}
        <img src='/appAssets/select-arrow.svg' alt='select' />
      </div>
      <ul className={toggled ? '' : 'hide'}>
        {items
          .filter((i) => selected !== i)
          .map((item, index) => (
            <li
              key={`select-${index}-${item.id}`}
              onClick={() => handleSetSelected(item)}
            >
              {item.displayName || item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Select;
