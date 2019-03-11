/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Matthew 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var petsArray = window.opener.imagesJson;

var figFilename = "images/petsIcons/" + petsArray[photoOrderArray[2]] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
	console.log("got here")
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
}


/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;