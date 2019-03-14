import React from 'react';
import GraphQLClientFactory from './GraphQLClientFactory';
import gqlConfig from '../temp/config';
import searchConfig from './search.config';
import gql from 'graphql-tag';

export const SearchContext = React.createContext();

export class SearchProvider extends React.Component {
    state = {
        searchResults: [],
        query: '',
        totalCount: 0
    };

    componentWillMount() {
        this.performSearch();
    }

    updateSearchQuery(query) {
        this.setState({
            query: query
        });
    }

    parseJson({ data: { search } }) {
        this.setState({
            searchResults: search.results.items.map(child => child.item),
            totalCount: search.totalCount
        });
    }

    performSearch() {
        const client = GraphQLClientFactory(gqlConfig.graphQLEndpoint, false, this.state);

        var fieldsEqual = [
            { name: "_fullpath", value: `${searchConfig.rootItem}*` },
            { name: "_templatename", value: searchConfig.includeTemplate }
        ];

        return client.query({
            variables: {
                query: this.state.query,
                fieldsEqual
            },
            query: gql`
                query Search($query: String, $fieldsEqual: [ItemSearchFieldQuery]) {
                    search(
                        fieldsEqual: $fieldsEqual
                        keyword: $query) {
                        results {
                            items {
                                item {
                                    name
                                    path
                                    url
                                    fields(ownFields: false) {
                                        name
                                        value
                                    }
                                }
                            }
                            totalCount
                        }
                    }
                }
                `
        }).then(json => this.parseJson(json));
    }

    render() {
        return (
            <SearchContext.Provider value={{
                search: this.state,
                updateSearchQuery: this.updateSearchQuery.bind(this),
                performSearch: this.performSearch.bind(this)
            }}>
                {this.props.children}
            </SearchContext.Provider>
        )
    }
}
