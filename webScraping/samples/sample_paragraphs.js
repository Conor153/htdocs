import * as cheerio from 'cheerio';
import axios from 'axios';

//let url = 'http://localhost/webScraping/sample.html';
//let url = 'https://fantasy.nfl.com/research/rankings';
let url = 'https://fantasy.premierleague.com/statistics';
//let url = 'https://fantasy.nfl.com/research/rankings?leagueId=0&position=RB&statSeason=2024&statType=weekStats&week=10';
let response = await axios.get(url);

const $ = cheerio.load(response.data);

// let $paragraphs = $('li');
// $paragraphs.each(function(index, element) { 
//     console.log($(element).text())
// }) 
let $paragraphs = $('.name');
$paragraphs.each(function(index, element) { 
    console.log($(element).text())
}) 

// let $paragraphs = $('.framework');
// $paragraphs.each(function(index, element) { 
//     console.log($(element).text())
// }) 

// let $paragraphs = $('h1');
// $paragraphs.each(function(index, element) { 
//     console.log($(element).text())
// }) 

// let $paragraphs = $('li').eq(2);
// $paragraphs.each(function(index, element) { 
//     console.log($(element).text())
// }) 

// let $paragraphs = $('img').eq(1).attr('src');
// $paragraphs.each(function(index, element) { 
//     console.log($(element).text())
// }) 

// let $paragraphs = $('img').eq(1).attr('src');
// $paragraphs.each(function(index, element) { 
//     console.log($(element).text())
// }) 
//console.log($($paragraphs[0]).text()); 