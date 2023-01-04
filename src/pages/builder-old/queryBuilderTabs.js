import React, { useEffect, useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import Select from '../../components/Select/Select';
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

const tabWidth = 180;
//const baseUrl = 'https://146a3axml6.execute-api.us-west-2.amazonaws.com/dev/get-data';
const baseUrl = 'http://localhost:4000/get-data';

function QueryBuilderTabs() {
  const [toggledDateInput, setToggledDateInput] = useState(false);
  const [itemsWithMax, setItemsWithMax] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(entities[0]);
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
    },
  ]);
  const [selectedTabId, setSelectedTabId] = useState(0);

  const addNewTab = () => {
    const tabToAdd = {
      id: tabs.length,
      title: '',
      type: `Query ${tabs.length + 1}`,
      selectedItems: [],
      generatedQuery: '',
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
    setSelectedTabId(selectedTabId - 1 > 0 ? selectedTabId - 1 : 0);
  };

  const handleSwitchTab = (id) => {
    setSelectedTabId(id);
  };

  const generateUQL = (data) => {
    const { selectedItemsArray, selectedEntity, dates, presetDate } = data;
    console.log('selectedItemsArray', selectedItemsArray);
    const filteredOptions = options.filter((o) =>
      selectedItemsArray.includes(o.display)
    );

    const optionsQueryString = filteredOptions.map((f) => f.query).join(', ');
    console.log('presetData', selectedEntity);
    const finalQueryString = `FETCH ${optionsQueryString} FROM entities(${
      selectedEntity.name
    }) ${dates ? `SINCE ${dates.startDate} UNTIL ${dates.endDate}` : ''} ${
      presetDate !== 'Most Recent' ? `SINCE ${presetDate.name}` : ''
    }`;

    const url = `${finalQueryString}`;
    const newTabData = [...tabs];
    newTabData[selectedTabId].generatedQuery = url;
    setServerResponse(null);
    setTabs(newTabData);
  };

  const addOrRemoveFromSelectedItems = (sItem) => {
    const tempSelectedItems = [...tabs][selectedTabId].selectedItems;
    let newSelectedItemsInTabs = [...tabs];

    if (tempSelectedItems.length === 0) {
      newSelectedItemsInTabs[selectedTabId].selectedItems = [...tabs, sItem];
      generateUQL({
        selectedItemsArray: [sItem],
        selectedEntity: selectedEntity,
        dates:
          startDate && endDate
            ? { startDate: startDate, endDate: endDate }
            : null,
        presetDate: presetDate,
      });
    }

    //check to see if it's already in selectedItems
    if (tempSelectedItems.includes(sItem)) {
      const newSelectedItems = tempSelectedItems.filter((s) => s !== sItem);
      newSelectedItemsInTabs[selectedTabId].selectedItems = newSelectedItems;

      generateUQL({
        selectedItemsArray: newSelectedItems,
        selectedEntity: selectedEntity,
        dates:
          startDate && endDate
            ? { startDate: startDate, endDate: endDate }
            : null,
        presetDate: presetDate,
      });
    } else {
      //check to see if items with a max key is in selectedItems
      const inBothArrays = _.intersection(itemsWithMax, tempSelectedItems);

      //if selectedItems has a max item key in one of the items and the sItem has a max key
      if (inBothArrays.length > 0 && itemsWithMax.includes(sItem)) {
        const selectedItemsWithoutMax = tempSelectedItems.filter(
          (t) => !itemsWithMax.includes(t)
        );

        const newSelectedItems = [...selectedItemsWithoutMax, sItem];
        newSelectedItemsInTabs[selectedTabId].selectedItems = newSelectedItems;

        generateUQL({
          selectedItemsArray: newSelectedItems,
          selectedEntity: selectedEntity,
          dates:
            startDate && endDate
              ? { startDate: startDate, endDate: endDate }
              : null,
          presetDate: presetDate,
        });
      } else {
        const newSelectedItems = [...tempSelectedItems, sItem];
        newSelectedItemsInTabs[selectedTabId].selectedItems = newSelectedItems;

        generateUQL({
          selectedItemsArray: newSelectedItems,
          selectedEntity: selectedEntity,
          dates:
            startDate && endDate
              ? { startDate: startDate, endDate: endDate }
              : null,
          presetDate: presetDate,
        });
      }
      setTabs(newSelectedItemsInTabs);
    }
  };

  useEffect(() => {
    console.log('tabs', tabs);
  }, [tabs]);

  const handleToggleSaveModal = (id) => {
    console.log('handleToggleSaveModal', id);
    setToggledModal(true);
  };

  const handleEditTitle = (value) => {
    const nTabs = [...tabs];
    nTabs[selectedTabId].title = value.value;
    console.log('nTabs', nTabs);
    setTabs(nTabs);
  };

  const handleSaveModal = (value) => {
    //save to server at some point
    setToggledModal(false);
  };

  const handleCallApi = async (generatedQuery, tid) => {
    const getLocalQuery = generatedQuery.split(`${baseUrl}?queryString=`)[1];
    console.log('getLocalQuery', getLocalQuery);
    console.log('queryStringFE', generatedQuery);
    console.log('tid', tid);

    const res = await axios(baseUrl, {
      params: { queryString: generatedQuery, tid },
    });

    console.log('res', res);
    setServerResponse(res.data);
  };

  const handleClearQuery = (id) => {
    const nTabs = [...tabs].map((n) => {
      if (n.id === id) {
        n.title = `Query ${n.id + 1}`;
        n.generatedQuery = '';
        n.selectedItems = [];
        return n;
      }
      return n;
    });
    setTabs(nTabs);
  };

  const selectFromSelect = (item, id) => {
    console.log('selectFromSelect', item, id);
    generateUQL({
      selectedItemsArray: [...tabs][selectedTabId].selectedItems,
      selectedEntity: id === 'entity' ? item : selectedEntity,
      dates:
        startDate && endDate
          ? { startDate: startDate, endDate: endDate }
          : null,
      presetDate: id === 'presetDate' ? item : presetDate,
    });
  };

  const handleSetQuery = (t) => {
    const tab = _.cloneDeep(t);
    tab.id = selectedTabId;
    console.log('tab', tab);
    const nTabs = [...tabs];
    nTabs[selectedTabId] = tab;
    setTabs(nTabs);
  };

  useEffect(() => {
    console.log('tabs', tabs);
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

      generateUQL({
        selectedItemsArray: tabs[selectedTabId].selectedItems,
        selectedEntity,
        dates: { startDateNew, endDateNew },
        presetDate: null,
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
      <div className='panel'>
        <h3>Schema List</h3>
        <div className='group'>
          <label>Entity</label>
          <Select
            items={entities}
            selectedItem={entities[0]}
            callback={selectFromSelect}
            id='entity'
          />
        </div>
        <div className='group'>
          <label>Duration</label>
          <Select
            items={durationOptions}
            selectedItem={durationOptions[0]}
            callback={selectFromSelect}
            id='presetDate'
          />
        </div>
        <div className='schema-options'>
          {tabs.map((t) => (
            <>
              {t.id === selectedTabId && (
                <div>
                  {options.map((o, index) => (
                    <div
                      className='item group'
                      key={`tab-${t.type}${o.display}-${index}}`}
                      onClick={() => addOrRemoveFromSelectedItems(o.display)}
                    >
                      <Checkbox
                        name={o.display}
                        isSelected={tabs[selectedTabId].selectedItems.includes(
                          o.display
                        )}
                      />

                      <div>
                        {o.display} <span className='label'>{o.func}</span>
                        {o.max && (
                          <>
                            <br />
                            <em>
                              Only {o.max} {o.func.slice(0, o.func.length - 1)}{' '}
                              allowed per query
                            </em>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className='builder-body'>
        <div className='builder-tabs-container'>
          <Tabs
            items={tabs?.map((f) => ({
              label: f.title || f.type,
              id: f.id,
            }))}
            selectedId={selectedTabId}
            callback={handleSwitchTab}
            isDeleteable={true}
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
            Add New
          </div>
        </div>
        {tabs.map((t) => {
          if (t.id === selectedTabId) {
            return (
              <div className='tab-body'>
                <QueryContainer
                  generatedQuery={t.generatedQuery}
                  queryId={t.id}
                  handleClearQuery={handleClearQuery}
                  handleToggleSaveModal={handleToggleSaveModal}
                />
              </div>
            );
          } else {
            return '';
          }
        })}

        <div className='suggested-queries'>
          <h2>Suggested Queries</h2>
          <div className='tag-container'>
            {suggestedQueries.map((s) => (
              <Button
                key={`button-${s.title}-${s.id}`}
                type='pill'
                label={s.title}
                callback={() => handleSetQuery(s)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default QueryBuilderTabs;
