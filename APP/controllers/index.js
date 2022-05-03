const Scrapper = require('../helpers/Scrapper.js');

exports.index = function(req, res) {
    res.render('index.ejs', {}); // render the index.ejs file
}

exports.devise = async function(req, res) {
    try {
        const { currency } = req.params;
        const { allResults, bestResult } = await Scrapper.run(currency);

        return res.render('Devise.ejs', { allResults, bestResult, currency });
    } catch (error) {
        console.log(error);
        return res.render('error.ejs', { message: "Oups", error });
    }
}