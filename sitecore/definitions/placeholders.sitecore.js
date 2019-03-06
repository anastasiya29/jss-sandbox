// eslint-disable-next-line no-unused-vars
import { Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adding placeholders is optional but allows setting a user-friendly display name. Placeholder Settings
 * items will be created for any placeholders explicitly added, or discovered in your routes and component definitions.
 * Invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest
 */
export default function addPlaceholdersToManifest(manifest) {
  manifest.addPlaceholder(
    { name: 'jss-main', displayName: 'Main' },
    // you can optionally pass a GUID or unique (app-wide) string as an ID
    // this will inform the ID that is set when imported into Sitecore.
    // If the ID is not set, an ID is created based on the placeholder name.
    { name: 'jss-tabs', displayName: 'Tabs', id: 'tabs-placeholder' },
    { name: 'grid-1-column', displayName: 'grid-1-column', id: 'grid-1-column' },
    { name: 'grid-2-column-right', displayName: 'grid-2-column-right', id: 'grid-2-column-right' },
    { name: 'grid-2-column-left', displayName: 'grid-2-column-left', id: 'grid-2-column-left' },
  );
}
