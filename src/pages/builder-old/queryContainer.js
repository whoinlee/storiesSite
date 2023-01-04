import React from 'react';
import CardTabs from './cardTabs';
import Card from '../../layout/Card/Card';
import Button from '../../components/Button/Button';

const tid = '01e4a9f9-8927-46e8-91bf-de787bc56a72';

function QueryContainer({
  generatedQuery,
  setShowAlert,
  queryId,
  handleClearQuery,
  handleCallApi,
  handleToggleSaveModal,
}) {
  const copyQuery = () => {
    navigator.clipboard.writeText(generatedQuery);
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
      callback: () => handleToggleSaveModal(queryId),
    },
    {
      id: 0,
      type: 'secondary',
      label: 'Clone',
    },
    {
      id: 0,
      type: 'secondary',
      label: 'Clear',
      callback: () => handleClearQuery(queryId),
    },
    {
      id: 0,
      type: 'primary',
      label: 'Run Query',
      callback: () => handleCallApi(generatedQuery, tid),
    },
  ];

  const formatQuery = (query) => {
    if (query) {
      const fetchString = query.split('FETCH')[1].split('FROM')[0];
      const fromString = query.split('FROM')[1].split('SINCE')[0];
      const sinceString = query.split('SINCE')[1];

      return (
        <div className='query-formatted'>
          <div className='heading'>FETCH</div>
          <div className='body'>{fetchString}</div>
          <div className='heading'>FROM</div>
          <div className='body'>{fromString}</div>
          <div className='heading'>SINCE</div>
          <div className='body'>{sinceString}</div>
        </div>
      );
    }
  };
  return (
    <div className='query-container'>
      <Card>
        <CardTabs />
        <div className='code'>
          {generatedQuery?.length > 0 && (
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
              {formatQuery(generatedQuery)}
            </>
          )}
          {generatedQuery?.length === 0 && (
            <div className='faded'>Select options on left panel.</div>
          )}
        </div>
        <div className='button-container'>
          {generatedQuery?.length > 0 &&
            buttons.map((b, index) => (
              <Button
                key={`button-${queryId}-${index}-${b.id}`}
                type={b.type}
                label={b.label}
                callback={b.callback}
              />
            ))}
        </div>
      </Card>
    </div>
  );
}

export default QueryContainer;
