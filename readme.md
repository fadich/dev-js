<h2 align="center">
ROYAL DEV
</h1>
<h6 align="center">(the development tools)</h6>

The application provides tools for automating some actions such as:
- filling fields;
- searching an elements;
- or other custom actions, etc.

In order to begin, there should be required the main file `royal-dev.js` from server.
It's can be done in several ways:
- simply specify the "src" path in the script-tag on HTML-layout;
- send AJAX-request to `{{ servername }}` (in developing);
- dynamic including the script, by executing simple commands:
 <pre>javascript:
 (function () {
    var script = document.createElement('script');
    script.src = "http://dev-js.loc/royal-main.js";
    document.head.appendChild(script); 
 }());</pre>
