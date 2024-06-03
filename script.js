let topLeftToggle = 0;

function openForm() {
    document.getElementById("signUpForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("signUpForm").style.display = "none";
}



function topLeftSelect() {
    alert(topLeftToggle)
    elem = document.getElementById("top-left");

    if (topLeftToggle == 0) {
    elem.style.backgroundColor = "red";
    }else{
        elem.style.backgroundColor = "white";
        topLeftToggle = 1;
    }

}