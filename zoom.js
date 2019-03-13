/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Matthew Redekop
 *    Date:   3/12/2019

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var petsArray = window.opener.imagesJson;

// file name derived from images arrays
var figFilename = "images/petIcons/" + petsArray[photoOrderArray[2]] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {

   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   document.getElementsByTagName("img")[0].alt= petsArray[photoOrderArray[2]];


// Attach close link event listener
   var closeLink = document.getElementById('close');

	if (closeLink.addEventListener) {
	// use built in close method to close pop up window.
	  closeLink.addEventListener("click", function(){ window.close() }, false);
	} else if (mainFig.attachEvent) {
	  closeLink.attachEvent("onclick", function(){ window.close()});
	}

}


/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;