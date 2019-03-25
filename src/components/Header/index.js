import React from 'react';
import { Text as SingleLineText, Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Heading, Text } from 'rebass';
import HeaderContainer from './HeaderContainer';
import Fade from 'react-reveal/Fade';

const Header = ({ fields, rendering }) => (
  <HeaderContainer>
    <Fade bottom>
      <Heading
        textAlign="center"
        as="h1"
        color="text"
        fontSize={[4, 5, 6]}
        style={{ textShadow: "0px 2px lightGray" }}
      >
        <SingleLineText field={fields.heading} />
      </Heading>

      <Text color="text" textAlign="center" fontSize={[2, 3]}>
        <SingleLineText field={fields.subheading} />
      </Text>
      <Placeholder name="jss-sandbox-header" rendering={rendering} />
    </Fade>
  </HeaderContainer>
);

export default Header
