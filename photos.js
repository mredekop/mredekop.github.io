/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variable, the main photo order tracking */
var photoOrder = [1,2,3,4,5,6,7,8];
var imagesJson = { 1:"scully", 2:"leonard", 3:"taco", 4:"bird", 5:"luna", 6:"steve",7:"schmordo", 8:"bubby"};

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;


/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 8; i++) {
      if ((photoOrder[i] + 1) === 9) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      // when the order changes, change the image tags to match
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 8; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 8;
      } else {
         photoOrder[i] -= 1;
      }
      // when the order changes, change the image tags to match
      populateFigures();
   }
}

/* open center figure in separate window */
function zoomFig() {
   var zoomWindow = window.open("zoom.htm", "zoomwin", "width=960,height=600");
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}


/* create event listeners for left arrow, right arrow, and center figure element */ 
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByClassName("gallery")[2];
   if (mainFig.addEventListener) {
      mainFig.addEventListener("click", zoomFig, false);
   } else if (mainFig.attachEvent) {
      mainFig.attachEvent("onclick", zoomFig);
   }
}

/* add src values to img elements based on order specified in photoOrder array */ 
function populateFigures() {
   var filename;
   var currentFig;

   // loop through image order array and adjust the images sources
   for (let i = 0; i < 5; i++) {


         filename = "images/petIcons/" + imagesJson[photoOrder[i]] + ".jpg";

         console.log(filename, i)

         currentFig = document.getElementsByClassName("gallery")[i];
         currentFig.src = filename;
   }
}

/* run setUpPage() function when the page finishes loading 
   that populates images and runs function that adds event listeners
   */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}