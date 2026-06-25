(function() {
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    document.addEventListener("DOMContentLoaded", function() {
        var consentBanner = document.querySelector(".js-cookie-consent");
        if (!consentBanner) return;

        // Hide banner if consent already registered
        if (getCookie("cookie_consent") === "1" || getCookie("cookie_consent") === "true") {
            consentBanner.style.display = "none";
            return;
        }

        var agreeBtn = document.querySelector(".js-cookie-consent-agree");
        if (agreeBtn) {
            agreeBtn.addEventListener("click", function() {
                setCookie("cookie_consent", "1", 365);
                consentBanner.style.display = "none";
            });
        }
    });
})();