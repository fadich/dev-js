let express = require('express');
let app = express();

import {index} from "./templates/panel/panel";

app.get('/', function (req, res) {
    res.send(index);
});

app.listen(4242, function () {
    console.log("Listening on port :4242");
});
