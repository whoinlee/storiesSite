import React from 'react';
import Line from '../../highcharts/Line/Line';
import Input from '../../components/Input/Input';

function CardBody({ type, chartOptions, data, action, handleEditData }) {
  return (
    <div className='card-body'>
      {type === 'LineChart' && <Line options={chartOptions} data={data} />}
      {type === 'Table' && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((m) => (
                <td>{m}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {action !== 'edit' &&
              data.map((dd) => (
                <tr>
                  {Object.values(dd).map((ddd) => (
                    <td>{ddd}</td>
                  ))}
                </tr>
              ))}
            {action === 'edit' &&
              data.map((dd) => (
                <tr>
                  {Object.entries(dd).map((ddd) => (
                    <td>
                      {/* {ddd[0]}
                      {ddd[1]} */}
                      <Input
                        inputKey={ddd[0]}
                        value={ddd[1]}
                        selectedId={dd.id}
                        handleEditData={handleEditData}
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CardBody;
