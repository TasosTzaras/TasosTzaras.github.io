const version = new Date().getTime();
document.write(`<link rel="stylesheet" href="styles.css?v=${version}">`);
document.write(`<script src="updateVersion.js?v=${version}"><\/script>`);