import styled from 'styled-components';
import { Card as CardRebass } from 'rebass';

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: ${props => props.margin};

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;
  & > div {
    justify-self: stretch;
  }
`

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
  borderRadius: 8,
  p: '20px'
})`
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  background: ${props => (props.image ? `url(${props.image}) center center / cover no-repeat` : 'white')};

  &:hover {
    top: -10px;
    box-shadow: 0 5px 30 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`

export default Card
