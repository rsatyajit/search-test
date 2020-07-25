const dataModel = "Search.json";
const fs = require("fs");


class searchModel {
    async insertSearchResults(query) {
        return new Promise((resolve, reject) => {
            try {
                fs.readFile(dataModel, function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        let json = JSON.parse(data);
                        query.created = new Date().getTime()
                        json.Search.push(query);
                        fs.writeFile(dataModel, JSON.stringify(json), function (err) {
                            (err) ? reject(err) : resolve(query);
                        });
                    }
                })
            }
            catch (err) {
                reject(err.message)
            }
        })
    }


    async selectSearchResults(options) {
        return new Promise((resolve, reject) => {
            try {
                let { query, page, limit } = options;
                page = page || 1;
                limit = limit || 10;
                fs.readFile(dataModel, function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        let logs = JSON.parse(data);
                        logs = logs.Search;
                        if (query) {
                            logs = logs.filter(item => item["search"].includes(query))
                        }
                        let total_count = logs.length;
                        let skip = (page === 1) ? 0 : ((page - 1) * limit);
                        logs = logs.sortBy("created");
                        let items = logs.splice(skip, limit);
                        resolve({ items, total_count });
                    }
                })
            }
            catch (err) {
                reject(err.message)
            }
        })
    }


}

module.exports = new searchModel();