import React from 'react';
import { SearchContext } from '../../lib/SearchContext'

const SearchResultItem = ({ item: { url, fields } }) => {
  const getField = fieldName => {
    const field = fields.find(({ name }) => name === fieldName);
    return field ? field.value : "";
  };
  return (
    <div>
      <h4>
        <a href={url}>{getField("pageTitle")}</a>
      </h4>
      <p>{getField("description")}</p>
    </div>
  )
};

const SearchResults = () => (
  <SearchContext.Consumer>
    {context => (
      context.search.searchResults.map((item, i) => <SearchResultItem item={item} key={i} />)
    )}
  </SearchContext.Consumer>
);

export default SearchResults;
