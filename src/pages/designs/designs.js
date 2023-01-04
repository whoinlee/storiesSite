import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import FullFilter from '../../layout/FullFilter/FullFilter';
import { formatEmail } from '../../helpers/config';
import { getFilters } from '../../helpers/helpers';
import './designs.scss';

function Designs({ storiesData }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(storiesData);
  const [toggledFilters, setToggledFilters] = useState(false);
  const [filters, setFilters] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoaded(true);
    getFilters(storiesData, setFilters);
  }, [storiesData]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const fData = storiesData.filter((f) =>
      f.projectName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(fData);
  };

  useEffect(() => {
    const activeFilters = searchParams.get('filters')?.split(',');
    const flattenedFilterDictionary = filters?.map((f) => f.data).flat();
    if (!filters) return;
    const compareArray = flattenedFilterDictionary
      .filter((f) => !activeFilters?.includes(f.id))
      .map((m) => m.name);

    const newFilteredArrayNames = storiesData.filter(
      (s) => !compareArray.includes(s.projectName)
    );

    const newFilteredArrayConfig = newFilteredArrayNames.filter((n) => {
      const configArray = n.config
        .split(';')
        .map((c) => {
          if (c.includes('Designer:'))
            return c.split('Designer:')[1].split(',');
          if (c.includes('PM:')) return c.split('PM:')[1]?.split(',');
          return c;
        })
        .filter((c) => c)
        .flat()
        .map((f) => f.trim());
      const compared = !compareArray.some((i) => configArray.includes(i));
      return compared;
    });

    setFilteredData(newFilteredArrayConfig);
  }, [searchParams, filters]);

  return (
    <div className={`page-padding designs ${!isLoaded ? 'center-all' : ''}`}>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <div className='header'>
            <img
              src='/AppDynamicsLogo_emblem_white.svg'
              className='logo'
              alt='logo'
              title='Stories'
            />
            <>
              <div className='search-container'>
                <div className='search'>
                  <input
                    className='search'
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder='Search Projects...'
                    value={searchQuery}
                  />
                  {searchQuery.length > 0 && (
                    <img
                      src='/appAssets/close.svg'
                      alt='Close Search'
                      className='close'
                      onClick={() => {
                        setSearchQuery('');
                        setFilteredData(storiesData);
                      }}
                    />
                  )}
                </div>
              </div>
              <img
                className='filter-icon'
                src='/appAssets/adjust.svg'
                onClick={() => setToggledFilters(!toggledFilters)}
              />
            </>
          </div>
          <div className='page-container'>
            <div
              className={`projects-container ${
                toggledFilters ? 'compressed' : ''
              }`}
            >
              {filteredData?.length > 0 &&
                filteredData?.map((f) => (
                  <Link
                    key={f.projectId + f.fileKey}
                    to={`/designs/${f.projectId}?fileKey=${f.fileKey}`}
                  >
                    <div className='projects'>
                      <h5>{f.projectName}</h5>
                      <span className='faded'>
                        {formatEmail(f?.config)?.[0]}
                      </span>
                      {f?.slides?.length > 0 && (
                        <img
                          src={
                            f?.slides?.[0]?.slideImage?.images[
                              f?.slides?.[0]?.slideImageDataId
                            ]
                          }
                          alt={f.projectName}
                          title={f.projectName}
                        />
                      )}
                      <div className='meta'>
                        {formatEmail(f.config).map(
                          (f, index) =>
                            index > 0 && (
                              <div className='faded' key={`${f}${index}`}>
                                {f}
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className={`filters ${toggledFilters ? 'expanded' : ''}`}>
              <FullFilter
                title='Filters'
                itemsWithCategories={filters}
                selectedIds={
                  searchParams?.get('filters')?.length > 0
                    ? searchParams.get('filters')?.split(',')
                    : []
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Designs;
