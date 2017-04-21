(function Init() {
	this.clear = function () {
	    var elements = document.getElementsByClassName("royal-dev-js");
	    var smth = elements.length;

	    for (var i = 0; i < smth; i++) {
	    	var el = elements[i];
	    	if (el) {
				el.remove();
			}
		}

		return this;
	};

    this.build = function () {
	    this.html.require("http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js");
	    this.html.require("/css/main.css", this.html.type.css);
	    this.html.createElement(templates.index);

	    return this;
    };

    this.templates = new Templates();
    this.html = new HtmlDocument();

    this.clear().build();
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
    }

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
    }
}

function Templates() {
    this.index = (function () {
        return "<div class='mainPanel " + (new HtmlDocument()).identityClass + "'><hr></div>";
    })();
}
