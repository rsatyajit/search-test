const searchModel = require("../model/search.model");

class AdminController {
    /** 
     *  SET search results in Server
     */
    async fetchSearchResults(req, res, next) {
        let { query, page = 1, limit = 10 } = req.query;
        try {
            let insertedData = await searchModel.selectSearchResults({ query, page, limit })
            res.body.message = "successfully fetched";
            res.body.status = "success";
            res.body.result = insertedData;
            next();
        } catch (err) {
            res.body.message = err;
            res.body.status = "error";
            next();
        }
    }

}

module.exports = new AdminController();




