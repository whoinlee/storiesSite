import React, { useState } from 'react';

function SchemaCollapse({ b }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className={`section ${collapsed ? 'collapsed' : ''}`}>
      <h2 className='faded' onClick={() => setCollapsed(!collapsed)}>
        {b.kind}
        <img src='/appAssets/chevron-right.svg' alt='collapse' />
      </h2>
      {b.data.map((bb, index) => (
        <div className='section-body' key={`${bb.name}-${index}`}>
          <h3>{bb.name}</h3>
          <div className='description'>
            {bb.namespace.name} {bb.description && ` : ${bb.description}`}
          </div>
          {bb.eventTypes && (
            <div className='section-meta'>
              <label className='faded'>Event Types: </label>
              {bb.eventTypes.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </div>
          )}
          {bb.metricTypes && (
            <div className='section-meta'>
              <label className='faded'>Metric Types: </label>
              {JSON.stringify(bb.metricTypes)}
            </div>
          )}
          {bb.extends && (
            <div className='section-meta'>
              <label className='faded'>Extends: </label>
              {Object.entries(bb.extends).map((bbb) => (
                <span key={bbb[0]}>
                  {bbb[0]}: {bbb[1].map((v) => v)}
                </span>
              ))}
            </div>
          )}
          {bb.attributeDefinitions?.attributes && (
            <div className='section-meta'>
              <label className='faded'>Attributes: </label>
              {Object.entries(bb.attributeDefinitions?.attributes).map(
                (bbb) => (
                  <span key={bbb[0]}>
                    {bbb[0]} {/* {bbb[1].description} */}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SchemaCollapse;
