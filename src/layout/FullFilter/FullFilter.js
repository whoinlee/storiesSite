import React, { useState, useEffect, useMemo } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useSearchParams } from 'react-router-dom';
import './FullFilter.scss';

function FullFilter({ title, itemsWithCategories, selectedIds }) {
  const [selectedFilterIds, setSelectedFilterIds] = useState(selectedIds);
  const handleToggleAll = (categoryObject) => {
    handleToggleCategory(categoryObject.data);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (selectedIds.length === 0) {
      const filtersData = itemsWithCategories.map((c) => c.data).flat();
      handleToggleCategory(filtersData);
    }
  }, []);

  const getCategoryState = useMemo(
    () => (categoryObject) => {
      const idsForCategory = categoryObject.data.map((cc) => cc.id);
      const isFullySelected =
        idsForCategory.filter((c) => selectedFilterIds.includes(c)).length ===
        categoryObject.data.length;
      return isFullySelected;
    },
    [selectedFilterIds]
  );

  const handleSelectedId = (id) => {
    const ids = selectedFilterIds;
    let newIds;
    if (ids.includes(id)) {
      newIds = ids.filter((f) => f !== id);
      setSearchParams({ filters: newIds.join(',') });
    } else {
      newIds = [...selectedFilterIds, id];
    }
    setSelectedFilterIds(newIds);
    setSearchParams({ filters: newIds.join(',') });
  };

  const handleToggleCategory = (categoryData) => {
    let newIds;
    const categoryDataIds = categoryData.map((c) => c.id);
    const overlapLength = selectedFilterIds.filter((s) =>
      categoryDataIds.includes(s)
    ).length;
    const allIn = overlapLength === categoryDataIds.length;

    if (selectedFilterIds.length > 0) {
      if (allIn) {
        //remove all in category aka remove all
        newIds = selectedFilterIds.filter((s) => !categoryDataIds.includes(s));
      } else {
        //make sure all category ids are in selectedIds and remove dupes aka add all
        newIds = [...new Set([...categoryDataIds, ...selectedFilterIds])];
      }
    } else {
      if (allIn) {
        return;
      } else {
        newIds = categoryData.map((c) => c.id);
      }
    }
    setSearchParams({ filters: newIds.join(',') });
    setSelectedFilterIds(newIds);
  };

  return (
    <div className='full-filter'>
      {title && <h5>{title}</h5>}
      {itemsWithCategories.map((c) => (
        <div className='section' key={c.category}>
          <div className='category' onClick={() => handleToggleAll(c)}>
            <Checkbox name={c.cateory} isSelected={getCategoryState(c)} />
            <label className='label-uppercase'>{c.category}</label>
          </div>
          <ul>
            {c.data.map((d) => (
              <li key={d.id} onClick={() => handleSelectedId(d.id)}>
                <Checkbox
                  name={d.name}
                  isSelected={selectedFilterIds.includes(d.id)}
                />{' '}
                {d.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FullFilter;
