function clickme() {

    var span = document.getElementById("productgallery")
    var modal = document.getElementById("mainmodal")
    var body = document.getElementById("mybody")
    console.log(body);
    modal.style.display = "block";
    span.style.filter = " blur(5px)";
    body.style.overflow = "hidden";

}
var productImages = ["./images/stone1.JPG", "./images/stone4.JPG", "./images/stone3.JPG", "./images/stone2.JPG", "./images/stone5.JPG", "./images/stone6.JPG", "./images/stone7.JPG", "./images/stone8.JPG", "./images/stone5.JPG", "./images/stone6.JPG", "./images/stone7.JPG", "./images/stone8.JPG"]

var productcard;
var imagecard;
indexofcard = 0;
window.onload = function () {
    var productImg = document.getElementById("productgallery");
    for (let index = 0; index < productImages.length; index++) {
        // document.getElementById("productgallery").innerHTML = `<div class="productcard" onclick=""><img class="productimage" src="${productImages[index]}"></div>`; 
        productcard = document.createElement("div")
        productcard.className = "productcard"
        productcard.id = indexofcard;
        productcard.addEventListener("click", clickme)
        productImg.append(productcard)
        var newproductcard = document.getElementById(indexofcard)
        imagecard = document.createElement("img")
        imagecard.className = "productimage"

        imagecard.src = productImages[index]
        newproductcard.append(imagecard)
        indexofcard = indexofcard + 1;
    }
}
function closewindow() {
    console.log("I am clicked")
    var division = document.getElementById("inputdatahere")
    division.setAttribute("style", "display:none;")
    var birthstonecard = document.getElementById("mystone")
    birthstonecard.style = "display:contents;"
}

function settingstone(images, stone) {
    var division = document.getElementById("inputdatahere")
    if (division.style.display = "none") {
        division.style.display = "contents"
        division.innerHTML = "";
    }
    var divv = document.createElement("img")
    divv.setAttribute("src", images)
    divv.setAttribute("class", "gemstone")
    var textt = document.createElement("p")
    textt.setAttribute("class", "textgems")
    textt.innerHTML = '<h3>Congradulations!</h3> <p class=trial>Your birthstone is ' + stone + '</p>'
    var buttonback = document.createElement("button")
    buttonback.setAttribute("class", "backbutton")
    buttonback.setAttribute("onClick", "closewindow()")
    buttonback.innerHTML = "Back"
    division.appendChild(divv)
    division.appendChild(textt)
    division.appendChild(buttonback)
}

function settingmultiplestone(arraystone, stone) {
    var division = document.getElementById("inputdatahere")
    if (division.style.display = "none") {
        division.style.display = "contents"
        division.innerHTML = "";
    }
    for (let index = 0; index < arraystone.length; index++) {
        var divv = document.createElement("img")
        divv.setAttribute("src", arraystone[index])
        divv.setAttribute("class", "multistone")
        division.appendChild(divv)
    }
    
    var textt = document.createElement("p")
    textt.setAttribute("class", "textgems")
    textt.innerHTML = '<h3>Congradulations!</h3> <p class=textformulti>Your birthstone is ' + stone + '</p>'
    var buttonback = document.createElement("button")
    buttonback.setAttribute("class", "backbutton")
    buttonback.setAttribute("onClick", "closewindow()")
    buttonback.innerHTML = "Back"

    division.appendChild(textt)
    division.appendChild(buttonback)
}


function findbirthstone(event) {
    event.preventDefault();
    var monthselection = document.getElementById("monthselection")
    var monthvalue = monthselection.value
    var birthstone = "";
    var birthstonecard = document.getElementById("mystone")
    var division = document.getElementById("inputdatahere")
    console.log(division.style)
    switch (monthvalue) {
        case "January":

            birthstone = "Garnet"
            birthstonecard.style = "display:none;"
            settingstone("images/garnet.png", birthstone)

            break;
        case "February":
            birthstone = "Amethyst"
            birthstonecard.style = "display:none;"
            settingstone("images/ame.png", birthstone)

            break;
        case "March":
            birthstone = "Aquamarine";
            birthstonecard.style = "display:none;"
            settingstone("images/aqua.png", birthstone)

            break;
        case "April":
            birthstone = "Diamond"

            birthstonecard.style = "display:none;"
            settingstone("images/diamond.png", birthstone)

            break;
        case "May":
            birthstone = "Emerald"

            birthstonecard.style = "display:none;"
            settingstone("images/emerald.png", birthstone)
            break;
        case "June":
            birthstone = "Pearl,Moonstone and Alexandarite";
            birthstonecard.style = "display:none;"
            var arraay = ["images/pearl.png", "images/moonstone.png", "images/alex.png"]
            settingmultiplestone(arraay, birthstone)
            break;
        case "July":
            birthstone = "Ruby"
            birthstonecard.style = "display:none;"
            settingstone("images/ruby.png", birthstone)
            break;

        case "August":
            birthstone = "peridot"
            birthstonecard.style = "display:none;"
            settingstone("images/peri.png", birthstone)

            break;
        case "September":
            birthstone = "Sapphire";
            birthstonecard.style = "display:none;"
            settingstone("images/saphire.png", birthstone)

            break;
        case "October":
            birthstone = "Opal"
            birthstonecard.style = "display:none;"
            settingstone("images/opal.png", birthstone)

            break;
        case "November":
            birthstone = "Topaz and Citrine";
            birthstonecard.style = "display:none;"
            var arraystone = ["images/topaz.png", "images/citrine.png"]
            settingmultiplestone(arraystone, birthstone)

            break;
        case "December":
            birthstone = "Zircon, Tanzanite,and Tourquoise";
            birthstonecard.style = "display:none;"
            var arraystonne = ["images/zircon.png", "images/tanzanite.png", "images/tour.png"]
            settingmultiplestone(arraystonne, birthstone)

            break;
        default:
            break;
    }
    console.log(monthvalue)
}