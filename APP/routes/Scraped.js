const puppeteer = require('puppeteer');
const fs = require('fs');

function run() {
    let URL = "https://www.stb.com.tn/fr/site/bourse-change/cours-de-change/";
    return new Promise(async(resolve, reject) => {
        /* Initiate the Puppeteer browser */
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        /* Go to the Sites bank page and wait for it to load */
        await page.goto(URL, { waitUntil: 'networkidle0' });

        /* Run javascript inside of the page */
        let data = await page.evaluate(() => {
            let datas = []
            for (let i = 0; i < 15; i++) {
                let courdechange = new Object();
                courdechange.Unite_Devise = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(2)").innerText;
                courdechange.Code_Devise = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(1)").innerText;
                courdechange.Coût_Vente = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td.vente-change").innerText;
                courdechange.Coût_Achat = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td.achat-change").innerText;
                courdechange.Date_Cours = document.querySelector("#main-content > div > div > table > tbody > tr:nth-child(" + (i + 2) + ") > td.date-change").innerText;
                datas.push(courdechange);
            }
            /* Returning an object filled with the scraped data */
            return {
                datas
            }

        });

        /* Outputting what we scraped */
        console.log(data);
        fs.writeFile('./Stb_Bank.json', JSON.stringify(data), err => err ? console.log(err) : null);
        await browser.close();
        //console.log(dat);
        return resolve(data);
    });

}

function attijaribank() {
    let URL = "http://www.attijaribank.com.tn/Fr/Cours_de_change__59_205";
    return new Promise(async(resolve, reject) => {
        /* Initiate the Puppeteer browser */
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        /* Go to the Sites bank page and wait for it to load */
        await page.goto(URL, { waitUntil: 'networkidle0' });

        /* Run javascript inside of the page */
        let data = await page.evaluate(() => {
            let datas = []
            for (let i = 0; i < 15; i++) {
                let courdechange = new Object();
                courdechange.Unite_Devise = document.querySelector("body > div.bg_page_contenu > div > div.center_page > div.div_tab.margin_bottom30 > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(2) > p").innerText;
                courdechange.Code_Devise = document.querySelector("body > div.bg_page_contenu > div > div.center_page > div.div_tab.margin_bottom30 > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(3) > p").innerText;
                courdechange.Coût_Vente = document.querySelector("body > div.bg_page_contenu > div > div.center_page > div.div_tab.margin_bottom30 > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(4) > p").innerText;
                courdechange.Coût_Achat = document.querySelector("body > div.bg_page_contenu > div > div.center_page > div.div_tab.margin_bottom30 > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(5) > p").innerText;
                courdechange.Date_Cours = document.querySelector("body > div.bg_page_contenu > div > div.center_page > div.div_tab.margin_bottom30 > table > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(6) > p").innerText;
                datas.push(courdechange);
            }
            /* Returning an object filled with the scraped data */
            return {
                datas
            }

        });

        /* Outputting what we scraped */
        console.log(data);
        fs.writeFile('./attijaribank.json', JSON.stringify(data), err => err ? console.log(err) : null);
        await browser.close();
        //console.log(dat);
        return resolve(data);
    });

}
run().then((data) => {
    console.log("fin code STB");
})
attijaribank().then((data) => {
        console.log("fin code attijaribank");
    })
    // console.log(dat);
module.exports = {
    run
}