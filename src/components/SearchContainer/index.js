import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { SearchProvider } from '../../lib/SearchContext';

const SearchContainer = ({ rendering }) => (
  <SearchProvider>
    <Placeholder name="jss-sandbox-search" rendering={rendering} />
  </SearchProvider>
);

export default SearchContainer;
