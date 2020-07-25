
const searchModel = require("../model/search.model");

class UserController {
    /** 
     *  SET search results in Server
     */
    async saveSearchResults(req, res, next) {
        const { totalitems = 0, search } = req.body;
        if (!search) {
            res.body.message = "search is mandatory";
            res.body.status = "error";
            next();
        } else {
            try {
                let insertedData = await searchModel.insertSearchResults({ totalitems, search })
                res.body.message = "successfully inserted";
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

}

module.exports = new UserController();


