// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-5-03ICS2O-5-03ICS2O-5-03/sw.js", {
    scope: "/ICS2O-5-03/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (age >= 17) {
    console.log ("you can see an R movie alone")
  } else if(age >= 13) {
      console.log("you can see a PG-13 movie alone")
  } else if(age >= 5) {
  console.log("you can see a g or PG movie alone")
  } else {
  console.log("your too young for most things")
  }
}