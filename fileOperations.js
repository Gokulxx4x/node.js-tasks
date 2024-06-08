// Import the fs (file system) module
const fs = require('fs');

// Define the input and output file names
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${inputFile}:`, err);
        return;
    }

    // Modify the file content (convert to uppercase)
    const modifiedData = data.toUpperCase();

    // Write the modified content to a new file
    fs.writeFile(outputFile, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file ${outputFile}:`, err);
            return;
        }

        console.log(`Content written to ${outputFile} successfully!`);
    });
});
