import React from 'react';
import { SearchContext } from '../../lib/SearchContext';
import { CardGrid } from '../../shared/Card';
import Fade from 'react-reveal/Fade';
import SearchResultTiles from './SearchResultTiles';
import CardFlip from '../../shared/CardFlip';

const SearchResults = () => (
  <SearchContext.Consumer>
    {context => (
      <CardGrid minWidth="350px" margin="0 100px">
        {context.search.searchResults.map((item, i) => (
          <Fade key={i} bottom delay={i * 200}>
            <CardFlip
              height="230px"
              front={<SearchResultTiles.Primary item={item} />}
              back={<SearchResultTiles.Detailed item={item} />} />
          </Fade>
        ))}
      </CardGrid>
    )}
  </SearchContext.Consumer>
);

export default SearchResults;
