import React, { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';

const tabWidth = 120;

function QueryContainerTabs({ data, handleSelectedQCTab }) {
  const [tabs, setTabs] = useState(data);
  const [selectedTabId, setSelectedTabId] = useState(0);

  const handleSwitchTab = (id) => {
    setSelectedTabId(id);
    handleSelectedQCTab(id);
  };

  return (
    <div>
      <Tabs
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
