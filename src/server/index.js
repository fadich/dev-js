let express = require('express');
let app = express();

import {mainPanel} from "./templates/index";

app.get('/', function (req, res) {
    res.send(
        mainPanel
    );
});

app.listen(4242, function () {
    console.log("Listening on port :4242");
});
