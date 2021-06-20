/**
 * You need to install on terminal (node.js):
 * -----------------------------------------------------
 * $ npm install pdfkit-table
 * -----------------------------------------------------
 * Run this file:
 * -----------------------------------------------------
 * $ node index-example-json.js
 * -----------------------------------------------------
 * 
 */

const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const doc = new PDFDocument({
  margin: 30, 
});

// load json file
const json = require("./table.json");

// to save on server
doc.pipe(fs.createWriteStream("./document.pdf"));

// if file json is array
Array.isArray(json) && json.forEach( table => doc.table( table, table.options || {} ) );

// done
doc.end();