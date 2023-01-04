import React, { useEffect, useState } from 'react';
import TabItem from './TabItem';
import './Tabs.scss';

function Tabs({
  items,
  selectedId,
  tabWidth,
  orientation = 'horizontal',
  callback,
  isDeleteable,
  handleDeleteTabItem,
}) {
  const [selectedTabId, setSelectedTabId] = useState(null);

  const handleSetSelectedTab = (tabId) => {
    setSelectedTabId(tabId);
    callback(tabId);
  };

  const handleRenameTab = (tabId) => {
    setSelectedTabId(tabId);
    callback(tabId, 'rename');
  };

  useEffect(() => {
    setSelectedTabId(selectedId || items[0].id);
  }, [items, selectedId]);

  return (
    <div className={`tabs-container ${orientation}`}>
      <div className='tabs'>
        {items.map((item) => (
          <TabItem
            key={item.id}
            item={item}
            isSelected={selectedTabId === item.id}
            handleSetSelectedTab={handleSetSelectedTab}
            handleRenameTab={handleRenameTab}
            width={`${tabWidth}px`}
            isDeleteable={isDeleteable}
            handleDeleteTabItem={handleDeleteTabItem}
          />
        ))}
      </div>
      {orientation === 'vertical' ? (
        <>
          <div
            className='line-vertical'
            style={{
              top: `${selectedTabId * 30}px`,
              color: 'white',
              height: '30px',
            }}
          >
            <div className='line-inside'></div>
          </div>
        </>
      ) : (
        <>
          <div
            className='line'
            style={{
              left: `${selectedTabId * tabWidth}px`,
              color: 'white',
              width: `${tabWidth}px`,
            }}
          ></div>
          <div className='line-background'></div>
        </>
      )}
    </div>
  );
}

export default Tabs;
