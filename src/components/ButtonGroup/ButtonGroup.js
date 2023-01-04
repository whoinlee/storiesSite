import React from 'react';
import './ButtonGroup.scss';

function ButtonGroup({ items, selectedId, callback, tabWidth }) {
  console.log('items', items, selectedId, callback, tabWidth);
  return (
    <div className='button-group'>
      {items.map((i) => (
        <div
          onClick={() => callback(i.id)}
          className={i.id === selectedId ? 'active' : ''}
          style={{ width: i.tabWidth + 'px' }}
        >
          {i.label}
        </div>
      ))}
    </div>
  );
}

export default ButtonGroup;
