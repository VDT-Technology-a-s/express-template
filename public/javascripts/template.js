window.addEventListener('load', function () {
    // elementy
    const outputParagraph = document.getElementById("output");

    // volání API
    fetch("app-api/template")
    .then(res => console.log(res));

}, false);