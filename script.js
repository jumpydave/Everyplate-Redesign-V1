let topLeftToggle = 0;
let topRightToggle = 0;
let bottomLeftToggle = 0;
let bottomRightToggle = 0;

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

function bottomLeftSelect() {
    elem = document.getElementById("bottom-left");

    if (bottomLeftToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    bottomLeftToggle = 1;    
    }else{
        elem.style.backgroundColor = "white";
        bottomLeftToggle = 0;
    }

    if (bottomRightToggle == 1) {
        document.getElementById("bottom-right").style.backgroundColor = "white";
        bottomRightToggle = 0;    
    }
}

function bottomRightSelect() {
    elem = document.getElementById("bottom-right");

    if (bottomRightToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    bottomRightToggle = 1;    
    }else{
        elem.style.backgroundColor = "white";
        bottomRightToggle = 0;
    }

    if (bottomLeftToggle == 1) {
        document.getElementById("bottom-left").style.backgroundColor = "white";
        bottomLeftToggle = 0;    
    }

}