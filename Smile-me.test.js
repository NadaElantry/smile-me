const puppeteer = require("puppeteer");
test("Test navigation to home screen and test contact us", async () => {
  let browser;
  jest.setTimeout(50000);
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 40
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1050, height: 600 });
    await page.goto("https://www.smileme.in/");
    await page.waitForSelector(".main-menu > nav > ul > li:nth-child(6) > a");
    await page.click(".main-menu > nav > ul > li:nth-child(6) > a");
    await page.waitFor(5000);
    await page.waitForSelector(
      "#contact > .container > .contacts > div:nth-child(1) > .btn"
    );
    await page.click(
      "#contact > .container > .contacts > div:nth-child(1) > .btn"
    );
    await page.waitFor(7000);
    await page.screenshot({ path: "contact-us.png" });
    await browser.close();
  } catch (error) {
    console.log("error happened");
    console.log(error);
    await browser.close();
  }
}); // test close
