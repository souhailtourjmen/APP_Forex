const Scrapper = require('../helpers/Scrapper.js');
const Banque = require('../helpers/Banque.js');
const nomdevise = require('../helpers/Devise.js');

exports.index = function(req, res) {
    res.render('index.ejs', {}); // render the index.ejs file
}
exports.devise = async function(req, res) {
    try {
        const { currency } = req.params;
        if(currency.length>3){
            return res.redirect('/'+currency);

        }else{
            const { allResults, bestResult ,Convertir} = await Scrapper.run(currency);
            let str= nomdevise.Nomdevise(currency);
            
            return res.render('Devise.ejs', { allResults, bestResult,Convertir,str });
        }
            
        }
       
      catch (error) {
        console.log(error);
        return res.render('error.ejs', { message: "Oups", error });
    }
}
exports.banque = async function(req, res) {
    try {
            const { allResults} = await Banque.run();
            return res.render('Banque.ejs', {allResults});
        }
       
      catch (error) {
        console.log(error);
        return res.render('error.ejs', { message: "Oups", error });
    }
}