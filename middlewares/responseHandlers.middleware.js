module.exports = (req, res, next) => {
    switch (res.body.status) {
        case "error":
            res.body._status_code = 401;
            return res.status(401).send(res.body);
            break;
        case "success":
            res.body._status_code = 201;
            return res.status(201).send(res.body);
            break;
        default:
            res.body._status_code = 500;
            return res.status(500).send({ message: "internal server error" });
    }
}