/**
 * Created by Sarah on 3/24/2017.
 */
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
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Please provide your email address.");
        return false;
    }
    // Get the modal
    var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('wedround');
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}