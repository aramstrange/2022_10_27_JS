// Lesson 1.1 Input: Checkbox

document.getElementById("chbox11").addEventListener("change", func11);

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

// Lesson 7 Annimation
var btn7 = document.getElementById("btn7");
var ball7 = document.getElementById("ball7");

btn7.onclick = function () {
    var position7 = 0;
    var interval7 = setInterval (annimation7, 10);
    function annimation7() {
        if (position7 <=180) {
            ball7.style.top = position7+"px";
            ball7.style.left= position7+"px";
            position7++;
        }else{
        clearInterval(interval7);
    }
    }
}

// Lesson 8 Slider

var slides8 = document.getElementsByClassName("slides8");
var prev8 = document.getElementById("prev8");
var next8 = document.getElementById("next8");
var dot8 = document.getElementsByClassName("dot8");

prev8.addEventListener("click", prevSlide);
next8.addEventListener("click", nextSlide);

var slideIndex8 = 0;
showSlides8(slideIndex8);

// function openning the previous slide
function prevSlide() {
    if (slideIndex8 > 0) {
        slideIndex8--;
    } else {
        slideIndex8 = 2;
    }
    showSlides8(slideIndex8);
    return slideIndex8;
}

// function openning the next slide
function nextSlide() {
    if (slideIndex8 < slides8.length - 1) {
        slideIndex8++;
    } else {
        slideIndex8 = 0;
    }
    showSlides8(slideIndex8);
    return slideIndex8;
}

// function to the slide and to run the selection of 
// corresponding dot
function showSlides8(k) {
    for (var i = 0; i < slides8.length; i++) {
        if (slides8[i] != slides8[k]) {
            slides8[i].style.display = "none";
        } else {
            slides8[i].style.display = "block";
            dotSelect8(i);
            continue;
        }
    }
}

// to find the number of the dot selected and 
// to run function showSlides8(k) for openning 
// the corresponding slide
for (var m = 0; m < dot8.length; m++) {
    dot8[m].onclick = function (event) {
        for (let n = 0; n < dot8.length; n++) {
            if (dot8[n] == event.target) {
                showSlides8(n);
                break;
            };
        }
    }
}

// function to select the dot corresponding to the opened slide
function dotSelect8(q) {
    for(var p = 0; p<dot8.length; p++){
        dot8[p].classList.remove("dotActive8");
    }
    dot8[q].classList.add("dotActive8");
    
}




