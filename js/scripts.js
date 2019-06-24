var contactSubmit = document.getElementById('contactButton');
var contactInfo = document.querySelector('form');
var servicesBtn = document.querySelector('#servicesBtn');
var mainHeader = document.querySelector('.wrapper');
var h1Services = document.querySelector('.services p');
var footer = document.querySelector('.foot-container');
var services = document.querySelector('.services');


/* This fixes the "sticky hover" in the menu when using touch-screen devices. */

$(document).ready(function () {
  $(".navIcon").click(function () {
    $(".navigation").toggle();
  });
});

/* This allows a popup survey to appear on the services page*/

$(document).ready(function () {
  $("#servicesBtn").click(function () {
    $("#survey-wrapper, #survey").addClass("active");
    servicesBtn.style.display = "none";
    mainHeader.style.display = "none";
    h1Services.style.display = "none";
    footer.style.display = "none";
    services.style.background = "white";
  });

  $("#closeBtn").click(function () {
    $("#survey-wrapper, #survey").removeClass("active");
    servicesBtn.style.display = "block";
    mainHeader.style.display = "block";
    h1Services.style.display = "flex";
    footer.style.display = "flex";
    services.style.background = "#202020";
  });
});

/* This makes a message appear after clicking 'submit' on the contact page. */

contactSubmit.addEventListener('click', ()=> {

  contactInfo.textContent = "Thanks. I'll talk to you soon.";
  contactInfo.style.color = "white";
  contactInfo.style.fontSize = "3em";
  contactInfo.style.padding = "0 20px 0 20px";
});

/* Services Button */





