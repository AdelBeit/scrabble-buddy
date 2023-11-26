const fs = require("fs");
const path = require("path");

// Define the directory to list files from
const directoryPath =
  "E:/Users/adelb/Desktop/deletables/Extreme-Uber-Eats-Scraping/scraped-data/restaurant-details";

// Define the output file
const outputFile = path.join(__dirname, "/filenames.sql");
const n = 3;
// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // Filter out directories and write file names to the output file
  const prefix =
    "E:/Users/adelb/Desktop/deletables/Extreme-Uber-Eats-Scraping/scraped-data/restaurant-details/";
    let wordlength = files.reduce((acc, file) => Math.max(acc, file.length),0);
    console.log(wordlength);
  // let fileContent = files
  //   .filter((file) => fs.statSync(path.join(directoryPath, file)).isFile())
  //   .map(
  //     (file) => file
  //     //   `COPY allres from '${prefix + file}' delimiter ',' csv HEADER;`
  //   )
  //   .join("\n");
  // .slice(0, n)
  // fs.writeFile(outputFile, fileContent, (err) => {
  //   if (err) {
  //     return console.log("Error writing to file: " + err);
  //   }
  //   console.log("File list saved to " + outputFile);
  // });
});
