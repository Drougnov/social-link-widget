const socialLinkWidget = document.querySelector(".slw");
const closeWidget = document.querySelector(".close");
let isPageFullyVisible = false;
let halfMinuteTimer = null;

function checkIfPageFullyVisible() {
    const isBottomReached =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (isBottomReached) {
        isPageFullyVisible = true;
        if (!isWidgetClosed()) {
            socialLinkWidget.classList.add("slw-active");
        }
    }
}

function handleHalfMinuteTimer() {
    if (!isWidgetClosed()) {
        socialLinkWidget.classList.add("slw-active");
    }
}

function closeWidgetHandler() {
    socialLinkWidget.classList.remove("slw-active");
    setWidgetClosed();
}

function isWidgetClosed() {
    return sessionStorage.getItem("widgetClosed") === "true";
}

function setWidgetClosed() {
    sessionStorage.setItem("widgetClosed", "true");
}

closeWidget.addEventListener("click", closeWidgetHandler);

window.addEventListener("scroll", function () {
    checkIfPageFullyVisible();
});

halfMinuteTimer = setTimeout(handleHalfMinuteTimer, 30000);

window.addEventListener("scroll", function () {
    clearTimeout(halfMinuteTimer);
});

window.addEventListener("scroll", function () {
    if (isPageFullyVisible) {
        clearTimeout(halfMinuteTimer);
    }
});

window.addEventListener("beforeunload", function () {
    sessionStorage.removeItem("widgetClosed");
});
