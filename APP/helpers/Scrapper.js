const puppeteer = require('puppeteer');




function run(sql) {
    let URL = "https://www.dinartunisien.com/fr/devise/"+sql;
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
            

            let convertisseur={}

            convertisseur.dinar =document.querySelector("body > div:nth-child(6) > div:nth-child(1) > div.col-lg-8 > div.rate-index.h1.text-uppercase > div > span:nth-child(3)")?.textContent;
            
            convertisseur.etranger=document.querySelector("body > div:nth-child(6) > div:nth-child(1) > div.col-lg-8 > div.rate-index.h1.text-uppercase > div > span:nth-child(1)")?.textContent;
        
            

            let meuiller = {};

            meuiller.vente = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(3)")?.innerHTML;
            meuiller.imgbankV = document.querySelector("body > div:nth-child(6) > div:nth-child(4) > div.col-lg-4.col-md-4.col-sm-12.col-xs-12 > div > div:nth-child(2) > div:nth-child(2) > a > img")?.src;
            meuiller.achat = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(1) > td:nth-child(4)")?.innerHTML;
            meuiller.imgbankA = document.querySelector("body > div:nth-child(6) > div:nth-child(4) > div.col-lg-4.col-md-4.col-sm-12.col-xs-12 > div > div:nth-child(2) > div:nth-child(3) > a > img")?.src;
           
            let datas = []

            for (let i=0; i <16; i++) { 
                let courdechange = {};
                courdechange.nom_bank =document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(1) > a")?.getAttribute('title');
                courdechange.img_bank = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(1) > a > img")?.src;
                courdechange.date = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(2) > span")?.innerText;
                courdechange.vente = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(3)")?.innerText;
                courdechange.achat = document.querySelector("#banks-rates-tables > tbody > tr:nth-child(" + (i + 2) + ") > td:nth-child(4)")?.innerText;

                datas.push(courdechange);
                
            }
            /* Returning an object filled with the scraped data */
            return { datas, meuiller,convertisseur }
        });

        /* Outputting what we scraped */
         console.log(data.datas[0].vente);
       
        await browser.close();
        return resolve({ allResults: data.datas, bestResult: data.meuiller,Convertir:data.convertisseur, error: null });
    });

}

// run().then((data) => {
//     console.log("fin code STB");
// })


module.exports = {
    run
}
