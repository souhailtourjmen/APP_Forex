const Scrapper = require('../helpers/Scrapper.js');
const nomdevise = require('../helpers/Devise.js');

exports.index = function(req, res) {
    res.render('index.ejs', {}); // render the index.ejs file
}

exports.devise = async function(req, res) {
    try {
        const { currency } = req.params;
        const { allResults, bestResult } = await Scrapper.run(currency);
        let str= nomdevise.Nomdevise(currency);
        return res.render('Devise.ejs', { allResults, bestResult,str });
    } catch (error) {
        console.log(error);
        return res.render('error.ejs', { message: "Oups", error });
    }
}