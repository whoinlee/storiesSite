import React, { useState, useEffect } from 'react';
import QueryContainerTabs from './queryContainerTabs';
import Card from '../../layout/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { builderSchema } from './schema.js';
import Checkbox from '../../components/Checkbox/Checkbox';
import {
  includeOptions,
  durationOptions,
} from '../../helpers/componentShowcase';
import Select from '../../components/Select/Select';
import SchemaCollapse from './schema-collapse';
import _ from 'lodash';

const tid = '01e4a9f9-8927-46e8-91bf-de787bc56a72';
const tabs = [
  {
    id: 0,
    type: 'Visual Query Builder',
  },
  {
    id: 1,
    type: 'Syntax Editor',
  },
  { id: 2, type: 'Schema List' },
];

const selectedFields = [
  {
    id: 0,
    type: 'timestamp',
    active: false,
  },
  {
    id: 1,
    type: 'value',
    active: false,
  },
  {
    id: 2,
    type: 'max',
    active: false,
  },
];

const namespaces = [
  ...new Set(
    builderSchema.map((b) => b.items.map((bb) => bb.namespace.name)).flat()
  ),
];

const namespacesObjects = namespaces.map((n) => ({ namespace: n, data: [] }));

const flattenedSchema = builderSchema.map((b) => b.items).flat();

//console.log('flattened', flattenedSchema);

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

/* 
const kindEvent = dataByKind
  .find((d) => d.kind === 'event')
  ?.data.map((d, index) => ({ ...d, id: index }));

const metricEvent = dataByKind.find((d) => d.kind === 'metric')?.data;
 */

//construct entity hierarchy
const entityEvent = dataByKind.find((d) => d.kind === 'entity')?.data;

const entityTypes = [...new Set(entityEvent.map((e) => e.namespace.name))].map(
  (n, index) => ({ type: n, data: [], id: index, name: n })
);

const entityHierarchy = entityTypes.map((e) => {
  const eH = entityEvent.map((v) => {
    let index = 0;
    if (v.namespace.name === e.type) {
      v.id = index;

      v.metricTypes =
        v.metricTypes?.map((m, idx) => ({
          name: m,
          addOns: _.cloneDeep(selectedFields),
          id: idx,
        })) || [];

      e.data.push(v);
      index++;
    }
  });
  return e;
});

//console.log('entityHierarchy', entityHierarchy);
//end

function QueryContainer({
  data,
  setShowAlert,
  handleClearQuery,
  handleCallApi,
  handleToggleSaveModal,
  handleClone,
  handleSetInputValue,
  handleSelectDuration,
  handleSelect,
  handleSelectedFetchIds,
  handleMetrics,
}) {
  const [selectedTabId, setSelectedTabId] = useState(0);
  const [selectedFetchIds, setSelectedFetchIds] = useState([]);
  const [selectedEntityType, setSelectedEntityType] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [selectedEntityTypeOptions, setSelectedEntityTypeOptions] =
    useState(null);
  const [selectedEntityMetricOptions, setSelectedEntityMetricOptions] =
    useState(null);
  const [selectedEntityEventOptions, setSelectedEntityEventOptions] =
    useState(null);
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const copyQuery = () => {
    navigator.clipboard.writeText(data.generatedQuery);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const buttons = [
    {
      id: 0,
      type: 'secondary',
      label: 'Save',
      callback: () => handleToggleSaveModal(data.id),
    },
    {
      id: 0,
      type: 'secondary',
      label: 'Clone',
      callback: () => handleClone(data.id),
    },
    {
      id: 0,
      type: 'secondary',
      label: 'Clear',
      callback: () => {
        handleClearQuery(data.id);
        selectEntityType(null);
      },
    },
    {
      id: 0,
      type: 'primary',
      label: 'Run Query',
      callback: () => handleCallApi(data.generatedQuery, tid),
    },
  ];

  const handleSelectedQCTab = (id) => {
    setSelectedTabId(id);
  };

  const handleSelectedId = (id) => {
    const sIds = [...selectedFetchIds];
    let newIds;
    if (sIds.includes(id)) {
      const filtered = sIds.filter((s) => s !== id);
      newIds = filtered;
    } else {
      newIds = [...sIds, id];
    }

    setSelectedFetchIds(newIds);
    const fetchIdData = includeOptions
      .map((i) => {
        if (newIds.includes(i.id)) return i;
      })
      .filter((f) => f !== undefined)
      .map((ff) => ff.query);

    handleSelectedFetchIds(fetchIdData);
  };

  const handleAddOns = (a, sId) => {
    /*     console.log('handleAddons', a);
    console.log('handleAddons_id', sId);
    console.log('handleAddons_all', selectedEntityMetricOptions);
    console.log('handleAddons_selected', selectedEntityMetricOptions[sId]); */

    const sEntityMetricOptions = _.cloneDeep(selectedEntityMetricOptions);

    sEntityMetricOptions[sId].addOns[a.id].active = !a.active;

    //console.log('handleAddons_final', sEntityMetricOptions);

    setSelectedEntityMetricOptions(sEntityMetricOptions);
    const sMetrics = selectedMetrics.map((s) => s.id);
    handleMetrics(sEntityMetricOptions.filter((f) => sMetrics.includes(f.id)));
  };

  const selectEntityType = (item) => {
    setSelectedEntityTypeOptions(null);
    setSelectedEntityMetricOptions(null);
    setSelectedEntityEventOptions(null);
    setSelectedEntityType(item?.type);
    //handleSelect(item, 'selectedEntityType');
    setTimeout(() => {
      setSelectedEntityTypeOptions(item);
    }, 50);
  };

  const selectEntity = (item) => {
    setSelectedEntity(item);
    handleSelect(`${item.namespace.name}:${item.name}`, 'selectedEntity');
    setSelectedEntityMetricOptions(item.metricTypes || []);
    setSelectedEntityEventOptions(
      item.eventTypes
        ? item.eventTypes.map((e, index) => ({ id: index, name: e }))
        : []
    );
  };

  const handleSelectedMetrics = (item) => {
    const sMetrics = [...selectedMetrics];
    let newMetrics;
    if (sMetrics.find((s) => s.id === item.id)) {
      newMetrics = sMetrics.filter((f) => f.id !== item.id);
      setSelectedMetrics(newMetrics);
    } else {
      newMetrics = [...sMetrics, item];
      setSelectedMetrics(newMetrics);
    }

    handleMetrics(newMetrics);
  };

  const handleSelectedEvents = (item) => {
    const sEvents = [...selectedEvents];
    let newEvents;
    if (sEvents.find((s) => s.id === item.id)) {
      newEvents = sEvents.filter((f) => f.id !== item.id);
      setSelectedEvents(newEvents);
    } else {
      newEvents = [...sEvents, item];
      setSelectedEvents(newEvents);
    }

    handleMetrics(newEvents);
  };

  const formatQuery = (query) => {
    if (query) {
      const fetchString = query?.split('FETCH')[1]?.split('FROM')[0];
      const fromString = query?.split('FROM')[1]?.split('SINCE')[0];
      const sinceString = query?.split('SINCE')[1]?.split('LIMIT')[0];
      const limitString = query?.split('LIMIT')[1];

      return (
        <div className='query-formatted'>
          <div className='heading'>FETCH</div>
          <div className='body'>{fetchString}</div>
          <div className='heading'>FROM</div>
          <div className='body'>{fromString}</div>
          <div className='heading'>SINCE</div>
          <div className='body'>{sinceString}</div>
          <div className='heading'>LIMIT</div>
          <div className='body'>{limitString}</div>
        </div>
      );
    }
  };

  return (
    <div className='query-container'>
      <Card>
        <QueryContainerTabs
          data={tabs}
          handleSelectedQCTab={handleSelectedQCTab}
        />
        <div className={selectedTabId === 1 ? '' : 'hidden'}>
          <>
            <div className='code'>
              <div className='placeholder faded center-all'>
                Syntax editor coming soon...
              </div>
              {/* {data.generatedQuery?.length > 0 && (
                <>
                  <svg
                    title='Copy to clipboard.'
                    xmlns='http://www.w3.org/2000/svg'
                    className='copy'
                    viewBox='0 0 512 512'
                    onClick={copyQuery}
                  >
                    <title>Copy</title>
                    <path d='M456 480H136a24 24 0 01-24-24V128a16 16 0 0116-16h328a24 24 0 0124 24v320a24 24 0 01-24 24z' />
                    <path d='M112 80h288V56a24 24 0 00-24-24H60a28 28 0 00-28 28v316a24 24 0 0024 24h24V112a32 32 0 0132-32z' />
                  </svg>
                  {formatQuery(data.generatedQuery)}
                  {!data.generatedQuery.includes('LIMIT') && (
                    <div className='additional-options-container'>
                      LIMIT
                      <Input
                        type='number'
                        placeholder='Enter number from 0 to 5000'
                        inputObject={{
                          value: null,
                          id: data.id,
                          name: 'limit',
                        }}
                        value={data.limit}
                        callback={handleSetInputValue}
                      />
                    </div>
                  )}
                </>
              )}
              {data.generatedQuery?.length === 0 && (
                <div className='placeholder faded center-all'>
                  Syntax editor coming soon...
                </div>
              )} */}
            </div>
            {/* <div className='button-container'>
              {data.generatedQuery?.length > 0 &&
                buttons.map((b, index) => (
                  <Button
                    key={`button-${data.queryId}-${index}-${b.id}`}
                    type={b.type}
                    label={b.label}
                    callback={b.callback}
                  />
                ))}
            </div> */}
          </>
        </div>
        <div className={selectedTabId === 3 ? '' : 'hidden'}>
          <>
            <div className=''>
              {dataByNamespace.map((b, index) => (
                <div className='section' key={`${b.namespace}-${index}`}>
                  <h2 className='faded'>{b.namespace}</h2>
                  {b.data.map((bb, index) => (
                    <div className='section-body' key={`${bb.kind}-${index}`}>
                      <h3>{bb.name}</h3>
                      <div className='description'>
                        {bb.kind} {bb.description && ` : ${bb.description}`}
                      </div>

                      {bb.eventTypes && (
                        <div className='section-meta'>
                          <label className='faded'>Event Types: </label>
                          {bb.eventTypes.map((e, index) => (
                            <span key={`${e}-${index}`}>{e}</span>
                          ))}
                        </div>
                      )}
                      {bb.metricTypes?.length > 0 && (
                        <div className='section-meta'>
                          <label className='faded'>Metric Types: </label>
                          {bb.metricTypes?.map((e, index) => (
                            <span key={`${e.metricType}-${index}`}>
                              {e.metricType}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        </div>
        <div className={selectedTabId === 2 ? '' : 'hidden'}>
          <div className='panel' style={{ width: '100%' }}>
            <div className=''>
              {dataByKind.map((b, index) => (
                <SchemaCollapse key={`${b.kind}-${index}`} b={b} />
              ))}
            </div>
          </div>
        </div>
        <div className={selectedTabId === 0 ? '' : 'hidden'}>
          <div className='builder-container'>
            <div className='code new'>
              <section className='double'>
                <div>
                  <h2>TIMEFRAME</h2>
                  <div className='from-container'>
                    <Select
                      items={durationOptions}
                      selectedItem={durationOptions[0]}
                      callback={handleSelectDuration}
                      id='presetDate'
                    />
                  </div>
                </div>
                <div>
                  <h2>LIMIT</h2>
                  <div className='from-container'>
                    <Input
                      type='number'
                      placeholder='Enter number from 0 to 5000'
                      inputObject={{
                        value: null,
                        id: data.id,
                        name: 'limit',
                      }}
                      value={data.limit}
                      callback={handleSetInputValue}
                    />
                  </div>
                </div>
              </section>
              <section>
                <h2>FROM</h2>
                <div className='from-container'>
                  <Select
                    items={entityHierarchy}
                    placeholder='Select Entity Type'
                    label='Entity Type'
                    callback={selectEntityType}
                    id='entity'
                  />
                  {selectedEntityTypeOptions && (
                    <Select
                      items={selectedEntityTypeOptions.data}
                      placeholder='Select Entity'
                      label='Entity'
                      callback={selectEntity}
                      id='entity'
                    />
                  )}
                </div>
              </section>
              {selectedEntityTypeOptions && (
                <>
                  <section>
                    <h2>FETCH</h2>
                    <h3>Include</h3>
                    <div className='pill-container'>
                      {includeOptions.map((o) => (
                        <div
                          className='pill'
                          key={o.id}
                          onClick={() => handleSelectedId(o.id)}
                        >
                          <Checkbox
                            name={o.name}
                            isSelected={selectedFetchIds.includes(o.id)}
                          />{' '}
                          {o.display}
                        </div>
                      ))}
                    </div>
                    {selectedEntityEventOptions && <h3>Events</h3>}
                    {selectedEntityEventOptions?.length === 0 && (
                      <span className='faded'>
                        No event options available for {selectedEntityType}
                      </span>
                    )}
                    {selectedEntityEventOptions?.length > 0 && (
                      <div className='pill-container'>
                        {selectedEntityEventOptions.map((o) => (
                          <div
                            className={`pill ${
                              selectedEvents?.map((s) => s.id).includes(o.id)
                                ? 'full-width'
                                : ''
                            }`}
                            key={o.id}
                          >
                            <div onClick={() => handleSelectedEvents(o)}>
                              <Checkbox
                                name={o.name}
                                isSelected={selectedEvents
                                  ?.map((s) => s.id)
                                  .includes(o.id)}
                              />{' '}
                              {o.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedEntityMetricOptions && <h3>Metrics</h3>}
                    {selectedEntityMetricOptions?.length === 0 && (
                      <span className='faded'>
                        No metric options available for {selectedEntityType}
                      </span>
                    )}
                    {selectedEntityMetricOptions?.length > 0 && (
                      <div className='pill-container'>
                        {selectedEntityMetricOptions.map((o, index) => (
                          <div
                            className={`pill ${
                              selectedMetrics?.map((s) => s.id).includes(o.id)
                                ? 'full-width'
                                : ''
                            }`}
                            key={`metric-${o.id}-${index}`}
                          >
                            <div onClick={() => handleSelectedMetrics(o)}>
                              <Checkbox
                                name={o.name}
                                isSelected={selectedMetrics
                                  ?.map((s) => s.id)
                                  .includes(o.id)}
                              />{' '}
                              {o.name}
                            </div>

                            {selectedMetrics
                              ?.map((s) => s.id)
                              .includes(o.id) && (
                              <>
                                <div>
                                  <Input placeholder='returns number, if desired, add custom math, i.e. / 1000' />
                                </div>
                                Include
                                {o?.addOns?.map((a, index) => (
                                  <div key={`${a.type}-${index}`}>
                                    <div onClick={() => handleAddOns(a, o.id)}>
                                      <Checkbox
                                        name={a.type}
                                        isSelected={a.active}
                                      />{' '}
                                      {a.type}
                                    </div>
                                  </div>
                                ))}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                </>
              )}
            </div>
            <div className='code-snippet code'>
              {formatQuery(data.generatedQuery)}
            </div>
          </div>
          <div className='button-container'>
            {data.generatedQuery?.length > 0 &&
              buttons.map((b, index) => (
                <Button
                  key={`button-${data.queryId}-${index}-${b.id}`}
                  type={b.type}
                  label={b.label}
                  callback={b.callback}
                />
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default QueryContainer;
