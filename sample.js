//var  image2Src = null;

function createBtns(){
    var btn1 = document.createElement("BUTTON");
    var btn1Label = document.createTextNode("Set Center Image");
    btn1.appendChild(btn1Label);
    btn1.addEventListener("click", getImage1Data);

    var btn2 = document.createElement("BUTTON");
    var btn2Label = document.createTextNode("Set Background Image");
    btn2.appendChild(btn2Label);
    btn2.addEventListener("click", getImage2Data);

    document.getElementById("btnContainer").appendChild(btn1);
    document.getElementById("btnContainer").appendChild(btn2);

}


function getImage1Data(){
    console.log("btn1 clicked");
    var  image1Src;
    var xhttp = new XMLHttpRequest();
    xhttp.open("Get", 'image1.txt', false); // GDT - added text page with src string to mimic XMLHTTP response
    xhttp.send(null);
    image1Src = xhttp.responseText; //Assume src = 'myFirstImg.png', 200x200 px

    appendImage1(image1Src);
}

function appendImage1(src){
    var image1 = document.createElement("IMG");
    image1.src = src;
    image1.width = 200;
    image1.height = 200;
    document.getElementById("image1").appendChild(image1);
}


function getImage2Data(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200)
            //getSrc(xhttp.responseText);
            appendImage2(xhttp.responseText);
    }
    xhttp.open("Get", 'image2.txt', true);
    xhttp.send(null);
}

function appendImage2(src){
    document.getElementById("image2").style.background = "url('" + src + "') no-repeat center center";
    document.getElementById("image2").style.backgroundSize = "cover";
}

//function getSrc(text){
    //image2Src = text; //Assume src = 'myLastImg.png', 10x10 px
//}

/*Dynamically add two buttons on page load and these buttons should call getImage1Data and getImage2Data. Please don't use any libraries.*/


/*##########################################################################*/

/* Code for Question # 8 */
var parentEle = document.createElement("DIV");
parentEle.addEventListener("click", clickHandler, false);

var firstEle = document.querySelector("#firstButton");
var secondEle = document.querySelector("#secondButton");
var thirdEle = document.querySelector("#thirdButton");
 

/*...has multiple elements...*/
var lastEle = document.querySelector("#lastButton");

/*  Now adding event listeners to all buttons */
// GDT - since we watch for the click events on the parent, these are no longer needed
//firstEle.addEventListener("click", clickHandler, false);
//secondEle.addEventListener("click", clickHandler, false);
//thirdEle.addEventListener("click", clickHandler, false);
 
/*...has multiple elements... */
//lastEle.addEventListener("click", clickHandler, false);

function clickHandler(e) {
    if(e.target !== e.currentTarget){
        var clickedEle = e.target.id;
        alert(clickedEle);
        e.preventDefault(); // this sets the property defaultPrevented only on the button clicks, clicks on the parent DIV could still be handled if needed up the DOM
    }
    //e.stopPropagation(); // this is a common practice, but might create problems with third party libs. this prevents bubbling of both the buttons and the parent div
     // See https://css-tricks.com/dangers-stopping-event-propagation/
}