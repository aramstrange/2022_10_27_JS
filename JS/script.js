// Lesson 1.1 Input: Checkbox

document.getElementById('chbox11').addEventListener("change", func11);

var chbox11 = document.getElementById("chbox11");
var res11 = document.getElementById("res11");



function func11() {
    if (chbox11.checked == true) {
        console.log("kuku");
        res11.innerHTML = "It is checked !";
    } else {
        res11.innerHTML = "It is NOT checked !";
    }
}

// Lesson 1.2 Input: Radiobutton

var radios = document.getElementsByName("rad");
for (let index = 0; index < radios.length; index++) {
    radios[index].addEventListener("change", func12);
}

var res12 = document.getElementById("res12");

function func12() {
    for (let j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
            res12.innerHTML = 'You have selected ' + radios[j].value;
        }
    }

}

// Lesson 2.1 Select

document.getElementById("sel21").addEventListener("change", func);

var res21 = document.getElementById("res21");
var opts21 = document.getElementById("sel21").options;

function func() {
    var sel21 = document.getElementById("sel21").selectedIndex;
    if (sel21 != "") {
        res21.innerHTML = "You have selected " + opts21[sel21].innerHTML + ".";
    } else {
        res21.innerHTML = "Please select the color !";
    }
}

document.getElementById("ran22").addEventListener("input", func22);

var ran22 = document.getElementById("ran22");
var res221 = document.getElementById("res221");
var res222 = document.getElementById("res222");

function func22() {
    res221.innerHTML = ran22.value;
    res222.value = ran22.value;
    res222.style.width = ran22.value / ran22.max * 100;
}

// Lesson 3 CSS generator

var ran31 = document.getElementsByClassName("ran31");
var txt31 = document.getElementsByClassName("txt31");
for (let i = 0; i < ran31.length; i++) {
    ran31[i].addEventListener("input", func31);
}
var ran31v = [];
var res31 = document.getElementById("res31");

function func31() {

    for (let j = 0; j < ran31.length; j++) {
        ran31v[j] = ran31[j].value;
    }
    for (let k = 0; k < txt31.length; k++) {
        txt31[k].value = ran31v[k];
    }
    res31.style.borderRadius = ran31v.join("px ") + "px";
}

// Lesson 4.1 (Not completed)

document.getElementById("nav41").onclick = function (event) {
    if (event.target.className == "menu41") {
        submenu = event.target.getElementsByClassName("submenu41");
        for (let i = 0; i < submenu.length; i++) {
            submenu[i].style.display = "block";
        }
    }
}

// Lesson 5.1 Tabs

var tabHead51 = document.getElementsByClassName("tabHead51");
var tabContent51 = document.getElementsByClassName("tabContent51");


// to find the number of the tab selected
for (let i = 0; i < tabHead51.length; i++) {
    tabHead51[i].onclick = function (event) {
        for (let j = 0; j < tabHead51.length; j++) {
            if (tabHead51[j] == event.target) {
                ShowTab(j);
                break;
            }
        }
    }
}

// to show the tab selected
function ShowTab(k) {
    for (let i = 0; i < tabHead51.length; i++) {
        tabHead51[i].classList.remove("tabHeadShow51");
        tabContent51[i].classList.remove("tabContentShow51");
    };
    tabHead51[k].classList.add("tabHeadShow51");
    tabContent51[k].classList.add("tabContentShow51");
}

// Lesson 6 Modal Window

var modal6 = document.getElementById("modal6");
var open6 = document.getElementById("open6");
var close6 = document.getElementById("close6");

open6.addEventListener("click", openModal);
close6.addEventListener("click", closeModal);
modal6.addEventListener("click", closeModalPlus);

function openModal() {
    modal6.style.display = "block";
}

function closeModal() {
    modal6.style.display = "none";
}

// function closing modal in case of a click out of the Modal window
function closeModalPlus(event) {
    if(modal6 == event.target){
        closeModal();
    }
}