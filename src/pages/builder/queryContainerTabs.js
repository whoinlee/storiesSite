import React, { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

const tabWidth = 160;

function QueryContainerTabs({ data, handleSelectedQCTab }) {
  const [tabs, setTabs] = useState(data);
  const [selectedTabId, setSelectedTabId] = useState(0);

  const handleSwitchTab = (id) => {
    setSelectedTabId(id);
    handleSelectedQCTab(id);
  };

  return (
    <div className='button-group-container'>
      <ButtonGroup
        items={tabs?.map((f) => ({
          label: `${f.type}`,
          id: f.id,
        }))}
        selectedId={selectedTabId}
        callback={handleSwitchTab}
        tabWidth={tabWidth}
      />
    </div>
  );
}

export default QueryContainerTabs;
