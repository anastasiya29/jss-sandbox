import React from 'react';
import { Text, RichText, DateField } from '@sitecore-jss/sitecore-jss-react';

const EventHeader = ({ routeData: { fields } }) => (
  <div>
    <Text tag="h2" field={fields.pageTitle} />
    <RichText field={fields.description} />
    <DateField field={fields.startDate} render={date => date.toLocaleDateString()} />
    -
    <DateField field={fields.endDate} render={date => date.toLocaleDateString()} />

    {fields.location.map((listItem, index) => (
      <div key={`sharedListItem-${index}`}>
        <p>
          Location: <Text field={listItem.fields.value} />
        </p>
      </div>
    ))}
  </div>
);

export default EventHeader;