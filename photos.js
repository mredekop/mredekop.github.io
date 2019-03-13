/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Matthew Redekop
 *    Date:   3/12/2019

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variable, the main photo order tracking */
var photoOrder = [1,2,3,4,5,6,7,8];
var imagesJson = { 1:"scully", 2:"leonard", 3:"taco", 4:"bird", 5:"luna", 6:"steve",7:"schmordo", 8:"bubby"};

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
   var zoomWindow = window.open("zoom.htm", "zoomwin", "width=650,height=800");
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}


/* create event listeners for left arrow, right arrow, and center figure element */ 
function createEventListeners() {

      // event listener for left arrow
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow);
   }
   // event listener for right arrow
   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
   }

   //event listenr for pop up detail window
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
         // generate the file name and path
         filename = "images/petIcons/" + imagesJson[photoOrder[i]] + ".jpg";
         // grab the element instance
         currentFig = document.getElementsByClassName("gallery")[i];
         // add generated path to the src property
         currentFig.src = filename;
         // add an alt tag with the pets name
         currentFig.alt = imagesJson[photoOrder[i]];
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