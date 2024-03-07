var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var num3 = document.getElementById("num3")
var num4 = document.getElementById("num4")
var num5 = document.getElementById("num5")
var star = document.getElementById("star")
var star1 = document.getElementById("star1")
var star2 = document.getElementById("star2")
var rating = document.getElementById("rating")
var submit = document.getElementById("submit")

var img = document.getElementById("img")
var pjs = document.getElementById("pjs")
var h1 = document.getElementById("h1")
var fip = document.getElementById("fip")
var span = document.getElementById("span")

function changeButtonColor(button) {
    // Change the button color (you can set any valid CSS color value)
    button.style.backgroundColor = 'orange';
    button.style.color = 'white'; // Optional: Change text color for better visibility
}
function submiteclick(){
    if(num1.style.backgroundColor === "orange"){
        star.style.display = "none"
        star1.style.display = "none"
        star2.style.display = "none"
        rating.style.display = "none"
        submit.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"

        img.style.display = "block"
        pjs.style.display = "block"
        h1.style.display = "block"
        fip.style.display = "block"
        span.innerHTML = "1"
    }
    else if (num2.style.backgroundColor === "orange"){
        star.style.display = "none"
        star1.style.display = "none"
        star2.style.display = "none"
        rating.style.display = "none"
        submit.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"

        img.style.display = "block"
        pjs.style.display = "block"
        h1.style.display = "block"
        fip.style.display = "block"
        span.innerHTML = "2"
    }
    else if (num3.style.backgroundColor === "orange"){
        star.style.display = "none"
        star1.style.display = "none"
        star2.style.display = "none"
        rating.style.display = "none"
        submit.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"

        img.style.display = "block"
        pjs.style.display = "block"
        h1.style.display = "block"
        fip.style.display = "block"
        span.innerHTML = "3"
    }
    else if (num4.style.backgroundColor === "orange"){
        star.style.display = "none"
        star1.style.display = "none"
        star2.style.display = "none"
        rating.style.display = "none"
        submit.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"

        img.style.display = "block"
        pjs.style.display = "block"
        h1.style.display = "block"
        fip.style.display = "block"
        span.innerHTML = "4"
    }
    else if (num5.style.backgroundColor === "orange"){
        star.style.display = "none"
        star1.style.display = "none"
        star2.style.display = "none"
        rating.style.display = "none"
        submit.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"
        star.style.display = "none"

        img.style.display = "block"
        pjs.style.display = "block"
        h1.style.display = "block"
        fip.style.display = "block"
        span.innerHTML = "5"
    }
    else{
        alert("click any rating button")
    }
}
