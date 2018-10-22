let express = require('express');
let bodyparser = require('body-parser');
let mainRoutes = require('./routes/index');

let app = express();

//app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mainRoutes.configure(app);

let server = app.listen(9999, () => {

    console.log('Server listening on port ' + server.address().port);
});