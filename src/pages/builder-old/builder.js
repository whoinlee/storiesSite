import React, { useState, useEffect } from 'react';
import { getMockData } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import QueryBuilderTabs from './queryBuilderTabs';
import Toast from '../../components/Toast/Toast';
import _ from 'lodash';
import './builder.scss';

const Builder = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    if (data) return;
    const res = await getMockData();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className={`builder-old ${!data ? 'center-all' : ''}`}>
      {!data && <Loader />}
      {data && (
        <div className='page-container'>
          <Toast
            title='This is an old version of Query Builder.'
            body='Open the left Side Panel and click on Query Builder for latest version.'
            time={99999999}
          />

          <div className='builder-tabs-container'>
            <QueryBuilderTabs />
          </div>
        </div>
      )}
    </div>
  );
};

export default Builder;
