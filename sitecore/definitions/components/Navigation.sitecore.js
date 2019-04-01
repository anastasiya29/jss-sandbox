// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';


/**
 * Adds the Navigation component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Navigation',
    icon: SitecoreIcon.DocumentTag,
    graphQLQuery: `
    query NavigationQuery($contextItem: String!) {
      item(path: $contextItem) {
        name
        path
        children {
          name
        }
      }
    }`
  });
}
