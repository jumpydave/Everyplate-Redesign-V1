let topLeftToggle = 0;
let topRightToggle = 0;

function openForm() {
    document.getElementById("signUpForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("signUpForm").style.display = "none";
}

function topLeftSelect() {
    elem = document.getElementById("top-left");

    if (topLeftToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    topLeftToggle = 1;    
    }else{
        elem.style.backgroundColor = "white";
        topLeftToggle = 0;
    }

    if (topRightToggle == 1) {
        document.getElementById("top-right").style.backgroundColor = "white";
        topRightToggle = 0;    
    }
}

function topRightSelect() {
    elem = document.getElementById("top-right");

    if (topRightToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    topRightToggle = 1;    
    }else{
        elem.style.backgroundColor = "white";
        topRightToggle = 0;
    }

    if (topLeftToggle == 1) {
        document.getElementById("top-left").style.backgroundColor = "white";
        topLeftToggle = 0;    
    }

}