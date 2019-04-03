import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

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
    query NavigationQuery {
      search(
        fieldsEqual: [
          { name: "_fullpath", value: "/sitecore/content/${packageJson.config.appName}/*" },
          { name: "_templatename", value: "App Route" }
        ]
      ) {
        results {
          items {
            item {
              name
              url
            }
          }
        }
      }
    }`
  });
}
