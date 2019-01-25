module.exports.getTemplate = (componentName, template) => {
    const exportVarName = componentName.replace(/[^\w]+/g, '');
    const templates = {

        // Template for React Class Component
        rcc: `import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
        
export default class ${exportVarName} extends Component {
  render() {
    return <div>
      <p>${componentName} Component</p>
      <Text field={this.props.fields.heading} />
      </div>
    }
  };
`,

        // Template for React Functional Component
        rfc: `import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
        
const ${exportVarName} = (props) => (
  <div>
    <p>${componentName} Component</p>
    <Text field={props.fields.heading} />
  </div>
);
        
export default ${exportVarName};
`
    };

    if (templates.hasOwnProperty(template)) {
        return templates[template]
    }

    console.log('No component template or invalid template specified, using React Functional Component template.');
    return templates.rfc;
};