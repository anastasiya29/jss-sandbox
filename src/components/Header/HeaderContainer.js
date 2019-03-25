import React from 'react';
import styled from 'styled-components';
import Background from '../../theme/Background';

const Container = styled.div`
  min-height: 40vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 7em 1em 0em 1em;
  scroll-behavior: smooth;
`

const HeaderContainer = ({ children }) => (
    <div style={{ position: 'relative' }}>
        <Background />
        <Container>{children}</Container>
    </div>
);

export default HeaderContainer
