module.exports = function (app) {
    //request sin parametros
    app.get('/api/', function (req, res) {
        const actualTime = new Date()
        res.json({ unix: actualTime.valueOf(), utc: actualTime.toUTCString() });
    });
    app.get('/api/:input', (req, res) => {
        const { input } = req.params;
        if (input.includes("-")) {
            const unix = Date.parse(input)
            const newDate = new Date(unix).toUTCString()
            return res.json({
                unix: unix,
                utf: newDate
            })
        }
        res.send("que rompimo")
    })
    //other routes..
}
