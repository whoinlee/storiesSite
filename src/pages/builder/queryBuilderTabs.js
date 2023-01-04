import React, { useEffect, useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import Select from '../../components/Select/Select';
import { builderSchema } from './schema.js';
import {
  entities,
  durationOptions,
  options,
  suggestedQueries,
} from '../../helpers/componentShowcase';
import _ from 'lodash';
import Checkbox from '../../components/Checkbox/Checkbox';
import QueryContainer from './queryContainer';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Card from '../../layout/Card/Card';
import SchemaCollapse from './schema-collapse';

const tabWidth = 180;
//const baseUrl = 'https://146a3axml6.execute-api.us-west-2.amazonaws.com/dev/get-data';
const baseUrl = 'http://localhost:4000/get-data';

const namespaces = [
  ...new Set(
    builderSchema.map((b) => b.items.map((bb) => bb.namespace.name)).flat()
  ),
];

const namespacesObjects = namespaces.map((n) => ({ namespace: n, data: [] }));

const flattenedSchema = builderSchema.map((b) => b.items).flat();

const dataByNamespace = namespacesObjects.map((n) => {
  flattenedSchema.map((f) => {
    if (f.namespace.name === n.namespace) {
      n.data.push(f);
      return n;
    }
  });
  return n;
});

const kinds = [
  ...new Set(builderSchema.map((b) => b.items.map((bb) => bb.kind)).flat()),
];

const kindsObjects = kinds.map((n) => ({ kind: n, data: [] }));

const dataByKind = kindsObjects.map((n) => {
  flattenedSchema.map((f) => {
    if (f.kind === n.kind) {
      n.data.push(f);
      return n;
    }
  });
  return n;
});

function QueryBuilderTabs({ setShowAlert }) {
  const [toggledDateInput, setToggledDateInput] = useState(false);
  const [itemsWithMax, setItemsWithMax] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [presetDate, setPresetDate] = useState(durationOptions[0]);
  const [serverResponse, setServerResponse] = useState(null);
  const [toggledModal, setToggledModal] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: '',
      type: 'Query 1',
      selectedItems: [],
      generatedQuery: '',
      limit: 5000,
    },
  ]);
  const [selectedTabId, setSelectedTabId] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAttributesInput, setShowAttributesInput] = useState(false);
  const [showTagsInput, setShowTagsInput] = useState(false);
  const [sortAttributes, setSortAttributes] = useState(null);
  const [sortTags, setSortTags] = useState(null);

  const sortOptions = [
    {
      id: 0,
      name: 'id',
    },
    {
      id: 1,
      name: 'type',
    },
    {
      id: 2,
      name: 'Created At',
      value: 'createdAt',
    },
    {
      id: 3,
      name: 'Updated At',
      value: 'updatedAt',
    },
    {
      id: 4,
      name: 'Attributes',
      value: 'attributes',
      callback: setShowAttributesInput,
    },
    {
      id: 4,
      name: 'Attributes',
      value: 'attributes',
      callback: setShowTagsInput,
    },
  ];

  const addNewTab = () => {
    const tabToAdd = {
      id: tabs.length,
      title: '',
      type: `Query ${tabs.length + 1}`,
      selectedItems: [],
      generatedQuery: '',
      limit: 5000,
    };
    setTabs([...tabs, tabToAdd]);
    setSelectedTabId(selectedTabId + 1 || 0);
  };

  const handleDeleteTabItem = (id) => {
    if (tabs.length === 1) return;
    const newTabs = tabs
      .filter((t) => t.id !== id)
      .map((i, index) => ({
        ...i,
        id: index,
        title: i.title,
        type: `Query ${index + 1}`,
      }));

    setTabs(newTabs);
    const newId = +id - 1;
    handleSwitchTab(+newId);
  };

  const handleSwitchTab = (id, type) => {
    setSelectedTabId(id);
    if (type === 'rename') {
      setToggledModal(true);
    }
  };

  const generateUQL = (data) => {
    const { selectedEntity, dates, presetDate, limit, fetchIds, metrics } =
      data;

    const optionsQueryString =
      fetchIds?.length > 0 ? `${fetchIds.join(', ')}, ` : '';

    let metricsString;

    if (metrics?.length > 0) {
      metricsString = metrics.map((m) => {
        const filtered = m.addOns.filter((a) => a.active);
        if (filtered.length > 0) {
          return ` metrics(${m.name}{${m.addOns
            .filter((a) => a.active)
            .map((aa) => aa.type)}})`;
        } else {
          return `metrics(${m.name}) `;
        }
      });
    } else {
      metricsString = '';
    }

    const finalQueryString = `FETCH ${optionsQueryString} ${
      selectedEntity
        ? `${
            metricsString ? metricsString : ''
          } FROM entities (${selectedEntity})`
        : 'FROM '
    } ${dates ? `SINCE ${dates.startDate} UNTIL ${dates.endDate}` : ''} ${
      presetDate !== 'Most Recent' ? `SINCE ${presetDate?.name}` : ''
    } LIMIT ${limit}`;

    const newTabData = [...tabs];
    newTabData[selectedTabId].generatedQuery = finalQueryString;
    setServerResponse(null);
    setTabs(newTabData);
  };

  useEffect(() => {
    const max = options.filter((o) => o.max).map((oo) => oo.display);
    setItemsWithMax(max);
  }, [tabs]);

  const handleToggleSaveModal = (id) => {
    setToggledModal(true);
  };

  const handleEditTitle = (value) => {
    const nTabs = [...tabs];
    nTabs[selectedTabId].title = value.value;
    setTabs(nTabs);
  };

  const handleSaveModal = (value) => {
    //save to server at some point
    setToggledModal(false);
  };

  const handleCallApi = async (generatedQuery, tid) => {
    const getLocalQuery = generatedQuery.split(`${baseUrl}?queryString=`)[1];

    const res = await axios(baseUrl, {
      params: { queryString: generatedQuery, tid },
    });

    setServerResponse(res.data);
  };

  const handleClone = (id) => {
    const nTabs = _.cloneDeep(tabs);
    const nTab = nTabs.find((n) => n.id === id);
    nTab.id = tabs.length;
    nTab.title = nTab.title
      ? `Cloned: ${nTab.title.replace('Cloned: ', '')}`
      : `Cloned: ${nTab.type}`;
    nTab.type = `Cloned: ${nTab.type}`;
    setTabs([...tabs, nTab]);
  };

  const handleClearQuery = (id) => {
    const nTabs = [...tabs].map((n) => {
      if (n.id === id) {
        n.title = `Query ${n.id + 1}`;
        n.generatedQuery = '';
        n.selectedItems = [];
        delete n.selectedEntity;
        return n;
      }
      return n;
    });
    setTabs(nTabs);
  };

  const handleSelectedFetchIds = (data) => {
    const newTab = [...tabs][selectedTabId];
    newTab.fetchIds = data;

    generateUQL({
      selectedItemsArray: newTab.selectedItems,
      selectedEntity: newTab.selectedEntity,
      dates: newTab.dates,
      presetDate: newTab.presetDate,
      limit: newTab.limit,
      fetchIds: data,
      metrics: newTab.metrics,
    });
    //EFLO

    const newTabs = [...tabs];
    newTabs[newTab.id] = newTab;
    setTabs(newTabs);
    //setTabs([...[...tabs].filter((t) => t.id !== newTab.id), newTab]);
  };

  const handleSelectDuration = (item, id) => {
    if (id === 'presetDate') setPresetDate(item);
    const newTab = [...tabs][selectedTabId];
    newTab.presetDate = item;

    generateUQL({
      selectedEntity: newTab.selectedEntity,
      dates:
        startDate && endDate
          ? { startDate: startDate, endDate: endDate }
          : null,
      presetDate: id === 'presetDate' ? item : presetDate,
      limit: item.limit ? item.limit : newTab.limit,
      fetchIds: newTab.fetchIds,
      metrics: newTab.metrics,
    });

    setTabs([...[...tabs].filter((t) => t.id !== newTab.id), newTab]);
  };

  const handleSetInputValue = (value) => {
    const newTab = [...tabs][selectedTabId];
    newTab.limit = value.value;
    setTabs([...[...tabs].filter((t) => t.id !== newTab.id), newTab]);
    generateUQL({
      selectedItemsArray: tabs[selectedTabId].selectedItems,
      selectedEntity: tabs[selectedTabId].selectedEntity,
      dates: endDate ? { startDate, endDate } : null,
      presetDate,
      limit: value.value,
      fetchIds: [...tabs][selectedTabId].fetchIds,
      metrics: newTab.metrics,
    });
  };

  const handleSelect = (value, selectName) => {
    //happening here investigate
    const newTab = [...tabs][selectedTabId];
    newTab[selectName] = value;

    generateUQL({
      selectedItemsArray:
        selectName === 'selectedItemsArray' ? value : newTab.selectedItems,
      selectedEntity: newTab.selectedEntity,
      dates:
        selectName === 'dates'
          ? value
          : endDate
          ? { startDate, endDate }
          : null,
      presetDate: selectName === 'presetDate' ? value : presetDate,
      limit: selectName === 'limit' ? value : newTab.limit,
      fetchIds: newTab.fetchIds,
      metrics: newTab.metrics,
    });

    setTabs([...[...tabs].filter((t) => t.id !== newTab.id), newTab]);
  };

  const handleSetQuery = (t) => {
    const tab = _.cloneDeep(t);
    tab.id = selectedTabId;
    const nTabs = [...tabs];
    nTabs[selectedTabId] = tab;
    setTabs(nTabs);
  };

  const handleExternalSearchQuery = (value) => {
    setSearchQuery(value?.toLowerCase());
  };

  const handleMetrics = (metrics) => {
    const newTab = [...tabs][selectedTabId];
    newTab.metrics = metrics;

    generateUQL({
      selectedItemsArray: newTab.selectedItems,
      selectedEntity: newTab.selectedEntity,
      dates: endDate ? { startDate, endDate } : null,
      presetDate: newTab.presetDate || presetDate,
      limit: newTab.limit,
      fetchIds: newTab.fetchIds,
      metrics: metrics,
    });

    setTabs([...[...tabs].filter((t) => t.id !== newTab.id), newTab]);
  };

  useEffect(() => {
    if (startDate?.length === 6 && endDate?.length === 6) {
      const sDate = startDate.split('');
      const sYear = `${sDate[4]}${sDate[5]}${sDate[6]}${sDate[7]}`;
      const sMonthIndex = +`${sDate[0]}${sDate[1]}` - 1;
      const sDay = `${sDate[2]}${sDate[3]}`;
      const startDateNew = new Date(sYear, sMonthIndex, sDay);

      const eDate = endDate.split('');
      const eYear = `${eDate[4]}${eDate[5]}${eDate[6]}${eDate[7]}`;
      const eMonthIndex = +`${eDate[0]}${eDate[1]}` - 1;
      const eDay = `${eDate[2]}${eDate[3]}`;
      const endDateNew = new Date(eYear, eMonthIndex, eDay);

      const newTab = [...tabs][selectedTabId];

      generateUQL({
        selectedItemsArray: newTab.selectedItems,
        selectedEntity,
        dates: { startDateNew, endDateNew },
        presetDate: null,
        fetchIds: newTab.fetchIds,
        metrics: newTab.metrics,
      });
    }
  }, [startDate, endDate, selectedEntity]);

  return (
    <>
      {toggledModal && (
        <Modal
          width='400px'
          title='Save Query'
          setToggledModal={setToggledModal}
          handleSaveModal={handleSaveModal}
          buttons={[
            {
              id: 0,
              type: 'secondary',
              label: 'Cancel',
              callback: () => setToggledModal(false),
            },
            {
              id: 0,
              type: 'primary',
              label: 'Save',
              callback: () => handleSaveModal(),
              disabled: tabs[selectedTabId]?.title?.length === 0,
            },
          ]}
        >
          <Input
            inputObject={{}}
            placeholder='Title'
            callback={handleEditTitle}
          />
        </Modal>
      )}

      <div className='builder-body'>
        <div className='builder-tabs-container'>
          <Tabs
            items={tabs?.map((f) => ({
              label: f.title || f.type,
              id: f.id,
            }))}
            selectedId={selectedTabId}
            callback={handleSwitchTab}
            isDeleteable={tabs.length > 1 ? true : false}
            tabWidth={tabWidth}
            handleDeleteTabItem={handleDeleteTabItem}
            align='left'
            maxChar={20}
          />
          <div
            className='add-button'
            style={{ left: `${tabs?.length * tabWidth}px` }}
            onClick={() => addNewTab()}
          >
            Write New Query
          </div>
        </div>
        {tabs.map((t) => {
          return (
            <div
              className={`tab-body  ${t.id === selectedTabId ? '' : 'hidden'}`}
              key={`t-${t.id}`}
            >
              <QueryContainer
                data={t}
                setShowAlert={setShowAlert}
                handleClearQuery={handleClearQuery}
                handleToggleSaveModal={handleToggleSaveModal}
                handleClone={handleClone}
                handleSelectDuration={handleSelectDuration}
                handleSetInputValue={handleSetInputValue}
                handleSelect={handleSelect}
                handleSelectedFetchIds={handleSelectedFetchIds}
                handleMetrics={handleMetrics}
              />
            </div>
          );
        })}

        <div className='suggested-queries'>
          <h2>Suggested Queries</h2>
          <div className='tag-container'>
            {suggestedQueries.map((s) => (
              <div key={`button-${s.title}-${s.id}`}>
                <Button
                  type='pill'
                  label={s.title}
                  callback={() => handleSetQuery(s)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default QueryBuilderTabs;
