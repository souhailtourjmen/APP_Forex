const Scrapper = require('../helpers/Scrapper.js');

exports.index = function(req, res) {
    res.render('index', {}); // render the index.ejs file
}

exports.devise = async function(req, res) {
    try {
        const { allResults, bestResult } = await Scrapper.run();

        return res.render('Devise.ejs', { allResults, bestResult });
    } catch (error) {
        console.log(error);
        return res.render('error.ejs', { message: "Oups", error });
    }
}