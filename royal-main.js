(function Init() {
    this.includeLibs = function () {
        this.html.require("http://dev-js.loc/lib/random/royal-random-string.js");
    };

    this.includeModules = function () {
        $('.royal-modules').text("");
        this.html.require("http://dev-js.loc/modules/autofill/royal-autofill.js");
    };

    this.clear = function () {
        this.html.clear(document.getElementsByClassName("royal-dev-js"));
    };

    this.build = function () {
        this.html.require("https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js");
        this.html.require("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css", this.html.type.css);
        this.html.require("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js");

        this.html.require("https://fonts.googleapis.com/icon?family=Material+Icons", this.html.type.css);

        this.html.require("http://dev-js.loc/css/royal-main.css", this.html.type.css);

        this.html.createElement(this.templates.index);
    };

    this.include = function () {
        var intInc = setInterval(function () {
            if (typeof $ === 'function') {
                this.includeLibs();
                this.includeModules();

                clearInterval(intInc);
            }
        }, 250);
    };

    this.draggablePanel = function () {
        var intDrag = setInterval(function () {
            if (!(typeof $ === 'function' && typeof $().draggable === 'function')) {
                return;
            }
            var mainPanel = $(".royal-mainPanel");
            mainPanel.draggable({
                distance: 50,
                handle: ".royal-dragButton",
                opacity: 0.75,
                containment: "window",
                snap: "window",
                snapMode: "both",
                snapTolerance: 50,
                scroll: false
            });

            mainPanel.resizable({
                minHeight: 300,
                minWidth: 300,
                maxHeight: window.innerHeight,
                maxWidth: window.innerWidth,
                handles: "all"
            });

            // TODO: load saved style.
            mainPanel.css({
                "width": "100%"
            });

            clearInterval(intDrag);
        }, 250);
    };

    this.templates = new Templates();
    this.html = new HtmlDocument();

    /* Rebuilding panel */
    this.clear();
    this.build();
    this.include();
    this.draggablePanel();


})();

function HtmlDocument() {
    this.identityClass = (function () {
        return "royal-dev-js";
    })();

    this.type = (function () {
        return {
            "js": (function () {
                return "script";
            })(),
            "css": (function () {
                return "link";
            })()
        };
    })();

    this.require = function (source, type) {
        type = type === undefined ? this.type.js : type;

        if (type !== this.type.js && type !== this.type.css) {
            return;
        }
        if (typeof source !== "string") {
            return;
        }

        var elem = document.createElement(type);

        if (type === this.type.js) {
            elem.src = source;
        } else if (type === this.type.css) {
            elem.rel = "stylesheet";
            elem.href = source;
        }

        elem.className = this.identityClass;
        document.head.appendChild(elem);
    };

    this.createElement = function (content, name, parent) {
        name = name === undefined ? "div" : name;
        parent = parent === undefined ? document.body : parent;

        if (typeof content !== "string" || typeof name !== "string") {
            return;
        }

        var elem = document.createElement(name);

        elem.innerHTML = content;
        elem.className = this.identityClass;
        parent.appendChild(elem);
    };

    this.clear = function (selector) {
        var elements = selector;
        var len = elements.length;

        for (var i = 0; i < len; i++) {
            var el = elements[i];
            if (el) {
                el.remove();
            }
        }
    }
}

function Templates() {
    this.index = (function () {
        // var els = document.getElementsByClassName("royal-dev-js");
        return "<div class='royal-mainPanel " + (new HtmlDocument()).identityClass + "'>" +
                "<div class='royal-panel-nav'>" +
                    "<button class='royal-close-panel royal-button' " +
                        "onclick='(new HtmlDocument()).clear(document.getElementsByClassName(\"royal-dev-js\"))'>" +
                            "<i class='material-icons'>settings_power</i>" +
                    "</button>" +
                    "<div class='royal-dragButton'><i class='material-icons'>open_with</i></div>" +
                "</div>" +
                "<hr>" +
                "<div class='royal-modules " + (new HtmlDocument()).identityClass + "'>" +
                    "Loading. . ." +
                "</div>" +
            "</div>";
    })();
}
