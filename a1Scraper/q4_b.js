import * as cheerio from 'cheerio';
import axios from 'axios';
import csv_writer from "csv-writer";


// Should be able to use either one of these:
// let url = 'http://localhost:3000/quotes.html';
let url = 'http://quotes.toscrape.com/';

let response = await axios.get(url);
const $ = cheerio.load(response.data);

// scrape & print the quotes
let $quotes = $('.text');
let quotes_array = [];
$quotes.each(function(index, element) { 
  console.log(`${index+1}:`,$(element).text())
  let id = index;
  let quote =  $(element).text()
  quotes_array.push({ id ,quote})
}) 

// create and export to the CSV file
const csvFile = "./quotes_a.csv";
const csvWriter = csv_writer.createObjectCsvWriter({
  path: csvFile,
  header: [
    {
      id: "id", title: "Number"
    },
    {
      id:"quote", title:"QUOTE"
    }
  ],
});
// write CSV file
csvWriter.writeRecords(quotes_array).then(() => {      //
  console.log("CSV Created.");                        //
}); 