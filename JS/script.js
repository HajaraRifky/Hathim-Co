function clickme() {

    var span=document.getElementById("productgallery")
    var modal = document.getElementById("mainmodal")
    var body=document.getElementById("mybody")
    console.log(body);
    modal.style.display = "block";
    span.style.filter=" blur(5px)";
    body.style.overflow="hidden";

}
var productImages = ["./images/stone1.JPG", "./images/stone2.JPG", "./images/stone3.JPG", "./images/stone4.JPG", "./images/stone5.JPG", "./images/stone6.JPG", "./images/stone7.JPG", "./images/stone8.JPG", "./images/stone5.JPG", "./images/stone6.JPG", "./images/stone7.JPG", "./images/stone8.JPG"]

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
