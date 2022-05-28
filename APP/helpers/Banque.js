const puppeteer = require('puppeteer');




function run() {
    let URL = "https://www.dinartunisien.com/fr/cours-devises-banques-tunisie";
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
            

           
            

            let datas = []

            for (let i=0; i <19; i++) { 
                let listbank = {};
                listbank.img =document.querySelector("body > div:nth-child(6) > div > div:nth-child("+(i+1)+") > a > img")?.src;
                listbank.Title = document.querySelector("body > div:nth-child(6) > div > div:nth-child("+(i+1)+") > h2 > a")?.innerHTML;
                datas.push(listbank);
                
            }
            /* Returning an object filled with the scraped data */
            return { datas}
        });

        /* Outputting what we scraped */
         console.log(data);
       
        await browser.close();
        return resolve({ allResults: data.datas});
    });

}

run().then((data) => {
    console.log("fin code bank");
})


module.exports = {
    run
}
