import * as cheerio from 'cheerio';
import axios from 'axios';



// Should be able to use either one of these:
// let url = 'http://localhost:3000/quotes.html';
let url = 'http://quotes.toscrape.com/';

console.log("Authors with quotes tagged as 'humor'");

let response = await axios.get(url);
const $ = cheerio.load(response.data);

// scrape & print the quotes with tag 'humor'
let $quotes = $('.tag').contains("humor");
let quotes_array = [];
$quotes.each(function(index, element) { 
  console.log(`${index+1}:`,$(element).text())
  let id = index;
  let quote =  $(element).text()
  quotes_array.push({ id ,quote})
}) 
