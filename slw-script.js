var url =
    "https://raw.githubusercontent.com/Drougnov/social-link-widget/main/index.html?token=GHSAT0AAAAAABYNONWI4V2KX377SSW2TJ2SZFQEG6Q";

var xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var divContent = xhr.responseText;
        var targetDiv = document.createElement("div");
        targetDiv.innerHTML = divContent;
        var targetElement = document.getElementById("targetElementId");
        targetElement.appendChild(targetDiv);

        // Load CSS file
        var cssLink = document.createElement("link");
        cssLink.href =
            "https://raw.githubusercontent.com/Drougnov/social-link-widget/main/style.css?token=GHSAT0AAAAAABYNONWJYDDI6TODUNDE2Q7CZFQEHOA";
        cssLink.rel = "stylesheet";
        document.head.appendChild(cssLink);

        // Load JS file
        var jsScript = document.createElement("script");
        jsScript.src =
            "https://raw.githubusercontent.com/Drougnov/social-link-widget/main/script.js?token=GHSAT0AAAAAABYNONWIS76I74VIKPZ4RV4WZFQEHXQ";
        document.head.appendChild(jsScript);
    }
};

xhr.send();
