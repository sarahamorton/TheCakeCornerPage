/**
 * Created by Sarah on 3/24/2017.
 */
//@ sourceURL=foo.js
function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Please enter your first name.");
        return false;
    }
    var x = document.forms["myForm"]["lastname"].value;
    if (x == "") {
        alert("Please enter your last name.");
        return false;
    }
    var x = document.forms["myForm"]["email"].value;                                       b
    if (x == "") {
        alert("Please provide your email address.");
        return false;
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    var modal = document.getElementById('myModal');


    var img = document.getElementById('wedround');
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
}

    }
}