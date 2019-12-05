const axios = require("axios");
const $ = require("cheerio");
const puppeteer = require('puppeteer');
const kataInfo = require("./kata");

const url = "https://www.codewars.com/collections/python-8kyu-1";


puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('http://example.com/');
  

  page.once('load', () => console.log('Page loaded!----------------------------------------------'));
  
  const a = await page.content();

  console.log(a);
  
  await browser.close();
});


const main = async () => {
  const { data } = await axios.get(url);
  let katas = [];

  $(".collection-items .item-title a", data).each(function() {
    katas.push({
      url: "https://www.codewars.com" + $(this).attr("href"),
      title: $(this).text(),
      description: ''
    });
  });


  for (let i = 0; i < 1; i++) {
    const kata = katas[i];

    const result = await kataInfo(kata.url)

    kata.description = result.description
  }

  console.log(katas[0]);
};

// main()
