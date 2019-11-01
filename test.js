const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.type("#textemail", "test");
  await page.type("#textpassword", "azertyuiop");
  await page.click("#btn");

  await page.screenshot({ path: "Error.png" });

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.type("#textemail", "devwithme7@gmail.com");
  await page.type("#textpassword", "anasanas11");

  await Promise.all([page.waitForNavigation(), page.click("#btn")]);

  await page.screenshot({ path: "Resultat_OK.png" });

  await browser.close();
})();
