// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  [![License: ${data.license}](${licenseBadge})](${licenseURL})
  
  <!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Description

${data.description}

## Installation

~~~ sh
  ${data.installation}
  ~~~ 

## Usage

${data.usage}

## License

Distributed under the ${data.license} License. Click [here](${licenseURL}) for more information.

## Contributing

${data.contributing}

## Testing

${data.testing}

## Questions

If you have any questions about the project you can reach me at my GitHub Profile: [github.com/${data.username}](https://github.com/${data.username}) or by email at ${data.email}

`;
}

module.exports = generateMarkdown;