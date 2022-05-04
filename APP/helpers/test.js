const puppeteer = require('puppeteer');
const fs = require('fs');


function run() {
    let URL = "https://www.dinartunisien.com/fr/devise/bhd";
    return new Promise(async(resolve, reject) => {
        /* Initiate the Puppeteer browser */
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
         // Configure the navigation timeout
        await page.setDefaultNavigationTimeout(0);

        /* Go to the Sites bank page and wait for it to load */
        await page.goto(URL, { waitUntil: 'networkidle0' });

        /* Run javascript inside of the page */
        let data = await page.evaluate(() => {
            // const content = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(3)");
            // if (!content) return { datas: [], meuiller: null, error: true };

            let datas = []
            let meuiller = {};
            meuiller.vente = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(3)")?.innerHTML;
            meuiller.imgbankV = document.querySelector("body > div:nth-child(6) > div:nth-child(4) > div.col-lg-4.col-md-4.col-sm-12.col-xs-12 > div > div:nth-child(2) > div:nth-child(2) > a > img")?.src;
            meuiller.achat = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(4)")?.innerHTML;
            meuiller.imgbankA = document.querySelector("body > div:nth-child(6) > div:nth-child(4) > div.col-lg-4.col-md-4.col-sm-12.col-xs-12 > div > div:nth-child(2) > div:nth-child(3) > a > img")?.src;
            let element = document.querySelectorAll(" tbody");
            
            let i = 1;
            for (let i = 0; i <17;i++) { /*3indi probleme  lehna lazmou yetrigel*/
                let courdechange = {};
                courdechange.currency = "EUR";
                courdechange.img_bank = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i+1) + ") > td:nth-child(1) > a > img")?.src;
                courdechange.date = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i+1) + ") > td:nth-child(2) > span")?.innerText;
                courdechange.vente = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i+1) + ") > td:nth-child(3)")?.innerText;
                courdechange.achat = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i+1) + ") > td:nth-child(4)")?.innerText;
                // courdechange.Date_Cours = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td.date-change").innerText;
                datas.push(courdechange);
                
            }
      
            /* Returning an object filled with the scraped data */
            return { datas, meuiller }
        });

        /* Outputting what we scraped */
        console.log(data);
        
        // fs.writeFile('./Stb_Bank.json', JSON.stringify(data), err => err ? console.log(err) : null);
        await browser.close();
        return resolve({ allResults: data.datas, bestResult: data.meuiller, error: null });
    });

}

run().then((data) => {
    console.log("fin code STB");
})

// console.log(dat);