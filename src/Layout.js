import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import './assets/app.css';
import defaultColors from './colors';

const Layout = ({ route }) => {
  const { themePrimaryColor, themeSecondaryColor } = route.fields;
  const colors = Object.assign({
    primary: themePrimaryColor ? themePrimaryColor.fields.value.value : "",
    secondary: themeSecondaryColor ? themeSecondaryColor.fields.value.value : ""
  }, defaultColors);

  return (
    <ThemeProvider theme={{ colors }}>
      <>
        <Helmet>
          <title>
            {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
          </title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
        </Helmet>
        <VisitorIdentification />
        <Placeholder name="jss-main" rendering={route} />
      </>
    </ThemeProvider>
  )
};

export default Layout;
