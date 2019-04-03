import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Container = styled.div`
  min-height: 34vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 8em 1em 0em 1em;
  scroll-behavior: smooth;
`

const HeaderContainer = ({ rendering }) => (
  <div style={{ position: 'relative' }}>
    <Background />
    <Container>
      <Placeholder name="jss-sandbox-header" rendering={rendering} />
    </Container>
  </div>
);

export default HeaderContainer
