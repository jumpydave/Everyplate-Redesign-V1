function openForm() {
    document.getElementById("signUpForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("signUpForm").style.display = "none";
}

function topLeftSelect() {
    let topLeftToggle = 0;
    elem = document.getElementById("top-left");

    if (topLeftToggle == 0) {
    elem.style.backgroundColor = "red";
    }
}