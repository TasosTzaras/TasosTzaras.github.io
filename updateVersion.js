// This script generates a unique version (timestamp) and updates the CSS link
document.addEventListener("DOMContentLoaded", function () {
    // Get the link element for the CSS file
    var styleSheetLink = document.getElementById("styleSheet");

    // Generate a timestamp as the version
    var version = new Date().getTime();

    // Append the version as a query parameter to the CSS file URL
    styleSheetLink.href = "styles.css?v=" + version;
});