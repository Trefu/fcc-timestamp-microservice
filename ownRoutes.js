module.exports = function (app) {

    app.get('/api/:date?', function (req, res) {
        console.log(req.params)
        const query = req.params || "empty"

        res.json({ date: query })
    });

    //other routes..
}