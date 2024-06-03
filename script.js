let topLeftToggle = 0;
let topRightToggle = 0;
let bottomLeftToggle = 0;
let bottomRightToggle = 0;

let rpwFourToggle = 0;
let rpwThreeToggle = 0;
let rpwFiveToggle = 0;
let rpwSixToggle = 0;

let nopTwoToggle = 0;
let nopFourToggle = 0;
let nopSixToggle = 0;

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

function clearCells() {
    document.getElementById("rpwThree").style.backgroundColor = "white"
    document.getElementById("rpwFour").style.backgroundColor = "white"
    document.getElementById("rpwFive").style.backgroundColor = "white"
    document.getElementById("rpwSix").style.backgroundColor = "white"
    rpwThreeToggle = 0
    rpwFourToggle = 0
    rpwFiveToggle = 0
    rpwSixToggle = 0
}

function rpwThree() {
    clearCells()

    elem = document.getElementById("rpwThree");

    if (rpwThreeToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    rpwThreeToggle = 1;    
    }
}

function rpwFour() {
    clearCells()

    elem = document.getElementById("rpwFour");

    if (rpwFourToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    rpwFourToggle = 1;    
    }
}

function rpwFive() {
    clearCells()

    elem = document.getElementById("rpwFive");

    if (rpwFiveToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    rpwFiveToggle = 1;    
    }
}

function rpwSix() {
    clearCells()

    elem = document.getElementById("rpwSix");

    if (rpwSixToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    rpwSixToggle = 1;    
    }
}

function clearCellsNop() {
    document.getElementById("nopTwo").style.backgroundColor = "white"
    document.getElementById("nopFour").style.backgroundColor = "white"
    document.getElementById("nopSix").style.backgroundColor = "white"
    nopTwoToggle = 0
    rpwFourToggle = 0
    nopSixToggle = 0
}

function nopTwo() {
    clearCellsNop()

    elem = document.getElementById("nopTwo");

    if (nopTwoToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    nopTwoToggle = 1;    
    }
}

function nopFour() {
    clearCellsNop()

    elem = document.getElementById("nopFour");

    if (rpwFourToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    nopFourToggle = 1;    
    }
}

function nopSix() {
    clearCellsNop()

    elem = document.getElementById("nopSix");

    if (nopSixToggle == 0) {
    elem.style.backgroundColor = "#FCB017";
    nopSixToggle = 1;    
    }
}
