"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var data = [1, 2, 3, 4];
app.get('/', function (req, res) {
    res.send({ data: data });
});
app.listen(8000, function () {
    console.log('서버온');
});
//# sourceMappingURL=app.js.map