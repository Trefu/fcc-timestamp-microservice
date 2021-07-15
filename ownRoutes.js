module.exports = function (app) {
    //request sin parametros
    app.get('/api/', function (req, res) {
        const actualTime = new Date()
        res.json({ unix: actualTime.valueOf(), utc: actualTime.toUTCString() });
    });
    app.get('/api/:input', (req, res) => {
        const { input } = req.params;
        let unix, newDate, resObj;
        if (input.includes("-")) {
            unix = Date.parse(input)
            newDate = new Date(unix).toUTCString()
            resObj = {
                unix: unix,
                utf: newDate
            }
        } else {
            unix = parseInt(input);
            newDate = new Date(unix).toUTCString();
            resObj = {
                unix: unix,
                utf: newDate
            }
        }
        !unix || !newDate ? res.json({
            error: "Invalid Date"
        }) : res.json(resObj)
    })
    //other routes..
}
