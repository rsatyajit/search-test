var express = require('express');
var router = express.Router();
var fs = require("fs");

Array.prototype.sortBy = function (p) {
  return this.slice(0).sort(function (a, b) {
    return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
  });
}

router.get("/", function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  return res.write(`<html>
   <ul>
   <li>
   <a href ='http://localhost:8000/build' target="_blank">click this link for user search repo</a>
   </li>
   <li>
   <a href ='http://localhost:8000/build/admin' target="_blank">click this link for admin to search all searched results</a>
   </li>
   </ul>
   </html>`);
})

/* SET Search results. */
router.post('/save/search', function (req, res, next) {
  const { totalitems, search } = req.body;
  if (search) {
    fs.readFile('Search.json', function (err, data) {
      var json = JSON.parse(data);
      json.Search.push({ totalitems: totalitems, search: search, created: new Date().getTime() })
      fs.writeFile('Search.json', JSON.stringify(json), function (err) {
        if (err) throw new Error(err);
        return res.send({ message: "data inserted" });
      });
    })
  } else {
    return res.send({ message: "success" });
  }
});


/** GET search results */
router.get('/get/search', function (req, res, next) {
  let { query, page, limit } = req.query;
  page = page || 1;
  limit = limit || 10;
  fs.readFile('Search.json', function (err, data) {
    let logs = JSON.parse(data);
    logs = logs.Search;
    if (query) {
      logs = logs.filter(item => item["search"].includes(query))
    }
    let total_count = logs.length;
    let skip = (page === 1) ? 0 : ((page - 1) * limit);
    logs = logs.sortBy("created");
    let items = logs.splice(skip, limit);
    return res.send({ items, total_count });
  })
});


module.exports = router;
