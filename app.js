const profileDataArgs = process.argv.slice(2, process.argv.length);

const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

console.log(generatePage('edward', 'edwardhub'));