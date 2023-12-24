import puppetteer from 'puppeteer';
import { fork } from 'child_process';
// import Validator from './src/js/app.js';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  // const validator = new Validator();
  // validator.setListeners();
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Valid card number', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validateInput');
    await input.type('5555555555554444');
    const button = await page.$('.validateBtn');
    await button.click();
    await page.waitForSelector('.luhn-succes');
  });

  test('Invalid card number', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validateInput');
    await input.type('012345');
    const button = await page.$('.validateBtn');
    await button.click();
    await page.waitForSelector('.luhn-error');
  });

  test('Valid card number', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validateInput');
    await input.type('5555555555554444');
    const button = await page.$('.validateBtn');
    await button.click();
    await page.waitForSelector('.luhn-succes');
  });

});