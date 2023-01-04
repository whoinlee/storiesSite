import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import Card from "../../layout/Card/Card";
import { getMockData } from "../../helpers/api";
import {
  getSearchParams,
  filterByValue,
  containsEntity,
  searchCategories,
} from "../../helpers/helpers";
import { Link } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import "./searchResults.scss";

function SearchResults() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [filtersWithData, setFiltersWithData] = useState([]);
  const [selectedTabId, setSelectedTabId] = useState(0);
  const [params, setParams] = useState(null);

  const getFilteredData = () => {
    if (window.location.search) {
      const paramsFromUrl = getSearchParams(
        window.location.search.substring(1)
      );
      if (paramsFromUrl) {
        setParams(paramsFromUrl);
      }

      //create filtered data
      if (paramsFromUrl) {
        const searchQuery = paramsFromUrl?.search?.toLowerCase();
        //const filteredData = filterByValue(data, searchQuery);
        const filteredData = containsEntity(
          data,
          searchQuery,
          searchCategories
        );
        setFilteredData(filteredData);

        const searchCategoriesWithData = searchCategories.map((b) => ({
          ...b,
          data: filteredData.filter((f) =>
            f[b.key]?.toLowerCase().includes(searchQuery)
          ),
        }));

        setFiltersWithData(filteredData);
      }
    } else {
      setFilteredData(null);
    }
  };

  const getData = async () => {
    if (data) {
      getFilteredData();
      return;
    }
    const res = await getMockData();
    setData(res);
  };

  const handleFilterBy = (id) => {
    setSelectedTabId(id);
  };

  const getTabData = () => {
    return filteredData.find((f) => f.id === selectedTabId)?.data;
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [data, window.location.search]);

  if (isLoaded)
    return (
      <div className="search-results-page page-padding">
        {params && params.search && filtersWithData.length > 0 && (
          <>
            <h4>
              <span>Search results</span> {filteredData.length} entities matched
              '{params.search}'
            </h4>
            <div className="results-container">
              <div className="filters-panel">
                <Tabs
                  items={filtersWithData.map((f) => ({
                    label: `${f.type} (${f.data.length})`,
                    id: f.id,
                  }))}
                  selectedId={selectedTabId}
                  callback={handleFilterBy}
                  tabWidth={120}
                  orientation="vertical"
                />
              </div>
              <div className="search-results">
                <Card
                  type="Table"
                  search="Search Table..."
                  data={getTabData()}
                />
              </div>
            </div>
          </>
        )}
        {!params ||
          (filteredData.length === 0 && (
            <div className="center-all empty-search">
              <img
                src="/appAssets/search-not-found.svg"
                className="invert"
                alt="empty search"
              />
              <h5>Nothing Found</h5>
              <Link to="/" className="button">
                <Button type="primary" label="Back to Home" />
              </Link>
            </div>
          ))}
      </div>
    );
  else {
    return (
      <div className="page-padding center-all">
        <Loader />
      </div>
    );
  }
}

export default SearchResults;
