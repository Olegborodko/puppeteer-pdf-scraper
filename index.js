const puppeteer = require('puppeteer');

async function start() {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  const url = 'https://www.tus.si/#s2';

  await page.goto(url, { waitUntil: 'networkidle2' });

  const domCards = "section#s2 div.slick-track li.list-item div.card";
  const domLinkName = "div.hover h3 a";
  const domDate = "p time";
  const domPdf = "figure figcaption a.pdf";

  const results = await page.evaluate((domCards, domLinkName, domDate, domPdf) => {
    const data = {};
    const cards = document.querySelectorAll(domCards);

    cards.forEach((item, index) => {
      const anchor = item.querySelector(domLinkName);
      if (anchor) {
        if (!data[index]) {
          data[index] = {};
        }

        data[index]['url'] = anchor.href;
        data[index]['name'] = anchor.innerHTML;
      }

      const date = item.querySelectorAll(domDate);
      date.forEach((item, indexTime) => {
        if (!data[index]['time']) {
          data[index]['time'] = {};
        }
        data[index]['time'][indexTime] = item.getAttribute('datetime');
      });

      const pdf = item.querySelector(domPdf);
      if (pdf) {
        data[index]['pdf'] = pdf.href;
      }
    });

    return data;
  }, domCards, domLinkName, domDate, domPdf);

  console.log(results);
  process.exit();
}

start();