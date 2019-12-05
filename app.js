const fs = require('fs')
const $ = require("cheerio");
const puppeteer = require('puppeteer');
const slugify = require('slugify')

const url = "https://www.codewars.com/collections/python-8kyu-1";

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto(url);
  let content = await page.content();
  let katas = [];

  $(".collection-items .item-title a", content).each(function () {
    katas.push({
      url: "https://www.codewars.com" + $(this).attr("href"),
      title: $(this).text()
    });
  });

  for (let i = 0; i < 1; i++) {
    const kata = katas[i];
    await page.goto(kata.url);
    await page.waitFor(() => document.querySelector('#description').innerText !== 'Loading description...')
    let content = await page.content();
    const description = $("#description", content);
    kata.description = description.html()
  }

  console.log(katas);

  let readme = `# codewars-solutions
My collection of solutions for Codewars
  
## 8 Kyu`

  fs.writeFileSync('readme.md', readme)

  katas.map((value, index) => {
    let slug = slugify(value.title, { lower: true })
    let template = `\n${index + 1}. [${value.title}](${value.url}) - [Solution](8kyu/${index + 1}-${slug}.md)`
    fs.appendFileSync('readme.md', template)


    let problemTemplate = '### Problem:\n';
    problemTemplate += value.description
    problemTemplate += '\n### Solution'

    fs.writeFileSync(`8kyu/${index + 1}-${slug}.md`, problemTemplate)

  })

  await browser.close();
});

