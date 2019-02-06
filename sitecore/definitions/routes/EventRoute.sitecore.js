import {
  CommonFieldTypes,
  SitecoreIcon
} from "@sitecore-jss/sitecore-jss-manifest";
import packageJson from '../../../package.json';

export default function (manifest) {
  manifest.addRouteType({
    name: "jss-sandbox-event-page",
    displayName: "JSS Sandbox Event",
    icon: SitecoreIcon.Microphone,
    fields: [
      {
        name: "description",
        type: CommonFieldTypes.RichText,
        displayName: "Event Description",
        required: false
      },
      {
        name: "startDate",
        type: CommonFieldTypes.DateTime,
        displayName: "Event Start Date",
        required: true,
        standardValue: "$now"
      },
      {
        name: "endDate",
        type: CommonFieldTypes.DateTime,
        displayName: "Event End Date",
        required: false,
        standardValue: "$now"
      },
      {
        name: "location",
        type: CommonFieldTypes.ItemLink,
        displayName: "Event Location",
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/locations`,
        required: false
      }
    ]
  });
}
