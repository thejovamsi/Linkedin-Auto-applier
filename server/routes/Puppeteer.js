const puppeteer = require("puppeteer");

async function runPuppeteer({jobTitle, Dateposted, jobDescription}){

const browser = await puppeteer.launch({ headless: false, slowMo: 50 , userDataDir: './puppeteer_data'});
const page = await browser.newPage();

try{
await page.goto('https://linkedin.com/jobs', {waitUntil :'networkidle2'});

// Login to linkedin
// const LINKEDIN_EMAIL = process.env.LINKEDIN_EMAIL
// const LINKEDIN_PASSWORD = process.env.LINKEDIN_PASSWORD
// await page.type('#username', LINKEDIN_EMAIL);
// await page.type('#password', LINKEDIN_PASSWORD);
// await page.click('button[type="submit"]');
// // await page.waitForNavigation({waitUntil: 'networkidle2'});

// console.log("Logged in to LinkedIn");
// search for jobs

// await page.goto('https://www.linkedin.com/jobs', {waitUntil: 'networkidle2'});
await page.waitForSelector('input[aria-label="Search by title, skill, or company"]',{visible:true});
await page.click('input[aria-label="Search by title, skill, or company"]',{clickCount:3});
await page.type('input[aria-label="Search by title, skill, or company"]', jobDescription);
await page.keyboard.press('Enter');

await page.waitForSelector('.jobs-search-results-list', { timeout: 10000 });
 console.log('the results are loaded');
}catch(error){
console.error('Error occurred while running Puppeteer:', error);
} finally{
await browser.close();
}

}

module.exports = runPuppeteer;
