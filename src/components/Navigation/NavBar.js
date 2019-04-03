import styled from 'styled-components';

const NavBar = styled.div`
    position: absolute;
    display: flex;
    a {
        z-index: 2;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.grayLight};
        margin: 25px 0px 0 35px;
        padding: 13px;
        border-radius: 25px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

export default NavBar;