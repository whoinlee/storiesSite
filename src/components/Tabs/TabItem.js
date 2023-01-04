import React from 'react';

function TabItem({
  item,
  isSelected,
  handleSetSelectedTab,
  handleRenameTab,
  width,
  isDeleteable,
  handleDeleteTabItem,
}) {
  return (
    <div
      className={`tab-item ${isSelected ? 'active' : ''}`}
      style={{ width: width }}
      onClick={() => handleSetSelectedTab(item.id)}
    >
      <div
        onDoubleClick={() => handleRenameTab(item.id)}
        onClick={() => handleSetSelectedTab(item.id)}
      >
        {item.label}
      </div>
      {isDeleteable && (
        <img
          src='/appAssets/close.svg'
          className='close'
          alt='close'
          onClick={() => handleDeleteTabItem(item.id)}
        />
      )}
    </div>
  );
}

export default TabItem;
