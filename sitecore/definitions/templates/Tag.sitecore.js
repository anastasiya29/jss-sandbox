import {
  CommonFieldTypes,
  SitecoreIcon
} from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addTemplate({
    name: "jss-sandbox-tag",
    displayName: "JSS Sandbox Tag",
    icon: SitecoreIcon.Tag,
    fields: [
      {
        name: "value",
        type: CommonFieldTypes.SingleLineText,
        displayName: "Tag Value",
        required: true,
        standardValue: "$name"
      }
    ]
  });
}
