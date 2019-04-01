import React from 'react';
import { SearchContext } from '../../lib/SearchContext';
import SearchBar from './SearchBar';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeypress = this.handleInputKeypress.bind(this);
  }

  componentDidMount() {
    if (!this.props.enteredSearchText && this.props.query) {
      this.props.changeEnteredSearchText(this.props.query);
    }
  }

  handleSearchClick({ performSearch }) {
    performSearch();
  }

  handleInputChange({ updateSearchQuery }, e) {
    updateSearchQuery(e.target.value);
  }

  handleInputKeypress({ performSearch }, e) {
    if (e.which === 13) {
      performSearch();
    }
  }

  render() {
    const { fields } = this.props;

    return (
      <SearchContext.Consumer>
        {context => (
          <SearchBar>
            <input type="text"
              placeholder={fields.searchPlaceholderText.value}
              value={context.search.query}
              onChange={this.handleInputChange.bind(this, context)}
              onKeyPress={this.handleInputKeypress.bind(this, context)} />
            {/*
              <button type="button" onClick={this.handleSearchClick.bind(this, context)}>
              <Text field={fields.searchButtonText} />
            </button>
              */}
          </SearchBar>
        )}
      </SearchContext.Consumer>
    );
  }
}

export default SearchBox;