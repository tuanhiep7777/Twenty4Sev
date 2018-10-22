module.exports = {

    configure: function (app) {

        app.get('/home/', (req, res) => {
            
            //res.sendFile(__dirname + '/../views/home.html');
            res.send('<h1>ahihi</h1>');
        });
    }
}