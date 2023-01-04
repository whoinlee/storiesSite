import React, { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';

const tabWidth = 120;

function QueryBuilderTabs() {
  const [tabs, setTabs] = useState([
    {
      id: 0,
      type: 'Syntax',
    },
    {
      id: 1,
      type: 'Visual QB',
    },
  ]);
  const [selectedTabId, setSelectedTabId] = useState(0);

  const handleSwitchTab = (id) => {
    setSelectedTabId(id);
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

export default QueryBuilderTabs;
