// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contribution

${data.contribution}

## Testing

N/A

## Questions

If you have any questions about the project you can reach me by email at ${data.questions}

`;
}

module.exports = generateMarkdown;