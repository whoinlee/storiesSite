import React, { useState, useEffect } from 'react';
import { getMockData } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import QueryBuilderTabs from './queryBuilderTabs';
import _ from 'lodash';
import './builder.scss';

const Builder = () => {
  const [data, setData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const getData = async () => {
    if (data) return;
    const res = await getMockData();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className={`builder ${!data ? 'center-all' : ''}`}>
      {!data && <Loader />}
      {data && (
        <div className='page-container'>
          <div className='builder-tabs-container'>
            <QueryBuilderTabs setShowAlert={setShowAlert} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Builder;
