function RandStr () {
    this.generate = function (len) {
        len = len === undefined ? 10 : len;
        var str = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < len; i++) {
            str += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return str;
    }
};
