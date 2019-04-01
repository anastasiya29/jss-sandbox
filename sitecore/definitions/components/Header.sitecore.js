import { CommonFieldTypes, SitecoreIcon }
  from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'Header',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      {
        name:
          'desktopSize',
        displayName: 'desktop size',
        type: CommonFieldTypes.Number
      },
      {
        name:
          'tabletSize',
        displayName: 'tablet size',
        type: CommonFieldTypes.Number
      },
      {
        name:
          'mobileSize',
        displayName: 'mobile size',
        type: CommonFieldTypes.Number
      },
      { name: 'element', type: CommonFieldTypes.SingleLineText },
      {
        name: 'textAlign',
        displayName: 'text align',
        type: CommonFieldTypes.SingleLineText
      },
    ]
  });
}
