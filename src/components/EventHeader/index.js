import React from 'react';
import { Text, RichText, DateField } from '@sitecore-jss/sitecore-jss-react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const EventHeader = ({ sitecoreContext: { route: { fields } } }) => (
  <div>
    <Text tag="h2" field={fields.pageTitle} />
    <RichText field={fields.description} />
    <DateField field={fields.startDate} render={date => date.toLocaleDateString()} />
    -
    <DateField field={fields.endDate} render={date => date.toLocaleDateString()} />
    <p>
      Location: <Text field={fields.location.fields.value} />
    </p>
  </div>
);

export default withSitecoreContext()(EventHeader);