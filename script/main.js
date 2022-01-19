window.onload = main;

function main()
{
    console.log(window.innerHeight);
    var screenHeight = window.innerHeight;
    var field = document.getElementsByClassName("row");

    var style = document.createElement("style");
    style.innerHTML = 
    "test";
    document.getElementsByTagName("head")[0].appendChild(style);
}