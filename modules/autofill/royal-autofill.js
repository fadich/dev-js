function Autofill () {
    var randStr = new RandStr();
    this.fillInputs = function () {
        $('input').each(function (key, input) {
            var type = input.getAttribute('type');
            var title = (document.title.split(" ")[0]).toLowerCase() || "auto";
            if (type === "email") {
                input.setAttribute('value', title + "__" + randStr.generate(10) + "@atrics.loc");
            } else if (type === "text") {
                input.setAttribute('value', title + "__" + randStr.generate(10));
            } else if (type === "password") {
                input.setAttribute('value', "123456");
            }
        });
        alert("fillInputs: jobs done!");
    };

    this.fillTextarea = function () {
        $('textarea').each(function (key, item) {
            console.log(key, item);
            item.innerHTML = randStr.generate(Math.floor(Math.random() * Math.random() * 1000));
        });
        alert("fillTextarea: jobs done!");
    };
}

(function build () {
    $('.royal-modules').append(
        "<div id='royal-module-autofill'>" +
            "<button onclick='(new Autofill()).fillInputs()' class='royal-button'>" +
                "Fill Inputs" +
            "</button> " +
        "</div>"
    );

    $('.royal-modules').append(
        "<div id='royal-module-autofill'>" +
            "<button onclick='(new Autofill()).fillTextarea()' class='royal-button'>" +
                "Fill Textarea" +
            "</button> " +
        "</div>"
    );


})();
