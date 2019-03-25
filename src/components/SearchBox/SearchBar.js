import styled from 'styled-components';

const SearchBar = styled.div`
    display: flex;
    position: relative;
    margin: 60px 20px 20px;
    ${props => {
        return `border-bottom: 2px solid ${props.theme.colors.grayDark};`
    }}
    & > input {
        max-width: none;
        width: 100%;
        margin-bottom: 0.5rem !important;
        border-style: none none none;
        border-image: initial;
        background: transparent;
        border-bottom: none !important;
        font-size: 1.5em;
        line-height: 1.7em;
        text-align: center;
        &:focus {
            outline: none;
        }
    }
`

export default SearchBar