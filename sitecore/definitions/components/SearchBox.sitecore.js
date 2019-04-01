import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'SearchBox',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'searchButtonText',
        displayName: 'search button text',
        type: CommonFieldTypes.SingleLineText
      },
      {
        name: 'searchPlaceholderText',
        displayName: 'search placeholder text',
        type: CommonFieldTypes.SingleLineText
      },
    ]
  });
}
