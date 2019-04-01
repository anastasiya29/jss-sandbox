import React from 'react';
import { Text as SingleLineText } from '@sitecore-jss/sitecore-jss-react';
import { Heading } from 'rebass';

const defaults = {
  textAlign: { value: 'left' },
  element: { value: 'div' },
  mobileSize: { value: 2 },
  tabletSize: { value: 2 },
  desktopSize: { value: 3 }
}

const Header = ({ fields }) => {
  fields = Object.assign({}, defaults, fields);
  return <Heading
    textAlign={fields.textAlign.value}
    as={fields.element.value}
    color="text"
    fontSize={[
      fields.mobileSize.value,
      fields.tabletSize.value,
      fields.desktopSize.value
    ]}
  >
    <SingleLineText field={fields.heading} />
  </Heading>
};

export default Header
