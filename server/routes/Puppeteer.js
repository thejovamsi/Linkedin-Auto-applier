const puppeteer = require("puppeteer");

async function runPuppeteer({jobTitle, datePosted, jobDescription}){

const browser = await puppeteer.launch({ headless: false, slowMo: 50 , userDataDir: './puppeteer_data_test'});
const page = await browser.newPage();


try{
await page.goto('https://linkedin.com/jobs', {waitUntil :'networkidle2'});


//Mapping function for time filter
const timefilter= {
    'Past 1 hour' : '3600',
    'Past 24 hours' : '86400',
    'Past 7 days' : '604800',
    'Past 30 days' : '2592000'
}

const selectedTime = timefilter[datePosted];

// Login to linkedin
// const LINKEDIN_EMAIL = process.env.LINKEDIN_EMAIL
// const LINKEDIN_PASSWORD = process.env.LINKEDIN_PASSWORD
// await page.type('#username', LINKEDIN_EMAIL);
// await page.type('#password', LINKEDIN_PASSWORD);
// await page.click('button[type="submit"]');
// await page.waitForNavigation({waitUntil: 'networkidle2'});

// await new Promise(resolve => setTimeout(resolve, 2000));

await page.goto(`https://www.linkedin.com/jobs/search-results/?distance=25&f_AL=true&f_TPR=r${selectedTime}&geoId=1034644278&keywords=${encodeURIComponent(jobTitle)}&origin=SEMANTIC_SEARCH_HISTORY` , {waitUntil: 'networkidle2'});
await new Promise(resolve => setTimeout(resolve, 2000));


// console.log("Logged in to LinkedIn");
// search for jobs

// await page.goto('https://www.linkedin.com/jobs', {waitUntil: 'networkidle2'});



// await page.waitForSelector('input[aria-label="Search by title, skill, or company"]',{visible:true});
// await page.click('input[aria-label="Search by title, skill, or company"]',{clickCount:3});
// await page.type('input[aria-label="Search by title, skill, or company"]', jobDescription);
// await page.keyboard.press('Enter');


// await page.locator('button[aria-label="Easy Apply filter."]').click();

// await page.locator('button[aria-label="Date posted filter. Clicking this button displays all Date posted filter options."]').click();
// await new Promise(resolve => setTimeout(resolve, 3000));
// await page.locator('button[aria-label="' + Dateposted + '"]').click();





// await new Promise(resolve => setTimeout(resolve, 5000));
// count = await page.evaluate(() => document.querySelectorAll('a[href*="/jobs/view"]').length);
// console.log(`Found ${count} job postings.`);

// SELECTING THE FIRST JOB AND APPLYING


// await page.waitForSelector('a[href*="/jobs/view"]',{visible:true});
// await page.click('a[href*="/jobs/view/"]:first-child');

// await page.locator('jobs-apply-button--top-card').click();


await new Promise(resolve => setTimeout(resolve, 10000));

// selecting the first job from the results
// await page.waitForSelector('job-card-job-posting-card-wrapper')
}catch(error){
console.error('Error occurred while running Puppeteer:', error);
} finally{
await browser.close();
}

}

module.exports = runPuppeteer;
