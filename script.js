document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-popup").style.display = "block";
    }

    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); 
        document.getElementById("cookie-popup").style.display = "none"; // Hide the pop-up
    });

    document.getElementById("reject-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "false"); 
        document.getElementById("cookie-popup").style.display = "none";
    });
});