const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


const generatePageCSS = () => {
    return `
    a {
        text-decoration: none;
        color: black;
    }
    `;
};

fs.writeFile("./index.html", generatePage(name, github), "utf8", err =>{
    if (err) throw err;

    console.log('HTML GENERATION COMPLETE');

});

fs.writeFile("./assets/style.css", generatePageCSS(), "utf8", err =>{
    if (err) throw err;

    console.log('CSS GENERATION COMPLETE');

});