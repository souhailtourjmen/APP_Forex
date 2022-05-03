const puppeteer = require('puppeteer');
const fs = require('fs');
let URL = "https://www.dinartunisien.com/fr/devise/eur";

function run() {
    return new Promise(async(resolve, reject) => {
        /* Initiate the Puppeteer browser */
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        /* Go to the Sites bank page and wait for it to load */
        await page.goto(URL, { waitUntil: 'networkidle0' });

        /* Run javascript inside of the page */
        let data = await page.evaluate(() => {
            let datas = []
            let meuiller = new Object();
            meuiller.vente = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(3)") ? .innerHTML;
            meuiller.imgbankV = document.querySelector("body > div:nth-child(6) > div:nth-child(4) > div.col-lg-4.col-md-4.col-sm-12.col-xs-12 > div > div:nth-child(2) > div:nth-child(2) > a > img").src;
            meuiller.achat = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(4)") ? .innerHTML;
            meuiller.imgbankA = document.querySelector("body > div:nth-child(6) > div:nth-child(4) > div.col-lg-4.col-md-4.col-sm-12.col-xs-12 > div > div:nth-child(2) > div:nth-child(3) > a > img").src;
            datas.push(meuiller);
            for (let i = 0; i < 15; i++) {
                let courdechange = new Object();
                courdechange.img_bank = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(1) > a > img").src;
                courdechange.date = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(2) > span").innerText;
                courdechange.Vente = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(3)").innerText;
                courdechange.Achat = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(4)").innerText;
                // courdechange.Date_Cours = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td.date-change").innerText;
                datas.push(courdechange);
            }
            /* Returning an object filled with the scraped data */
            return {
                datas
            }

        });

        /* Outputting what we scraped */
        // console.log(data);
        // fs.writeFile('./Stb_Bank.json', JSON.stringify(data), err => err ? console.log(err) : null);
        await browser.close();
        //console.log(dat);
        return resolve(data);
    });

}

// run().then((data) => {
//     console.log("fin code STB");
// })

// console.log(dat);
module.exports = {
    run
}