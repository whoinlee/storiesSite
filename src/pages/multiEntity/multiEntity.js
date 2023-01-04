import React, { useState } from "react";
import FullFilter from "../../layout/FullFilter/FullFilter";
import { multiEntityFilters } from "../../helpers/config";
import "./multiEntity.scss";

/* const categories = multiEntityFilters.map((m) => m.categories);
const uniqueCategories = [...new Set(categories)]; */

const selected = multiEntityFilters
  .map((m) => m.data.map((mm) => mm.id))
  .flat();

function MultiEntity() {
  const [selectedFilterIds, setSelectedFilterIds] = useState(selected);

  const handleSelectedId = (id) => {
    const ids = selectedFilterIds;
    let newIds;
    if (ids.includes(id)) {
      newIds = ids.filter((f) => f !== id);
    } else {
      newIds = [...selectedFilterIds, id];
    }

    setSelectedFilterIds(newIds);
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
    setSelectedFilterIds(newIds);
  };

  return (
    <div className="multi-entity">
      <FullFilter
        itemsWithCategories={multiEntityFilters}
        selectedIds={selectedFilterIds}
        handleSelectedId={handleSelectedId}
        handleToggleCategory={handleToggleCategory}
      />
    </div>
  );
}

export default MultiEntity;
