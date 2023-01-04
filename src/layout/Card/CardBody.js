import React, { useState } from 'react';
import Line from '../../highcharts/Line/Line';
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';

function CardBody({
  type,
  chartOptions,
  data,
  selectedAction,
  mode,
  id,
  handleEditData,
}) {
  const windowWidth = 100;
  return (
    <div className='card-body'>
      {type === 'LineChart' && <Line options={chartOptions} data={data} />}
      {type === 'InputCard' && (
        <Form
          data={data}
          selectedAction={selectedAction}
          mode={mode}
          id={id}
          handleEditData={handleEditData}
        />
      )}
      {type === 'Table' && data && (
        <table className='data-table'>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Entities</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr
                className='list-item'
                key={`${d['attributes("service.name")']}${index}`}
              >
                <td className='item-name'>
                  <Link to={`/detail/${d['attributes("service.name")']}`}>
                    {d['attributes("service.name")']}
                  </Link>
                </td>
                <td>{d.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CardBody;
