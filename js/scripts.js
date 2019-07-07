var contactSubmit = document.querySelector('#contactButton');
var contactInfo = document.querySelector('form');
var servicesBtn = document.querySelector('#servicesBtn');
var mainHeader = document.querySelector('.wrapper');
var h1Services = document.querySelector('.services p');
var footer = document.querySelector('.foot-container');
var services = document.querySelectorAll('.survey');
var closeMessage = document.querySelector('.wrapClose');
var closeBtn = document.querySelector('#closeBtn');
var contactName = document.getElementById('#name');
var clientName = document.querySelector('#clientName');





/*////////////////////////////////////////////////////////*/
/*////Allows drop-down menu to function//////////////////*/
/*//////////////////////////////////////////////////////*/

$(document).ready(function () {
  $(".navIcon").click(function () {
    $(".dropMenu ul").toggle();
  });
});

/*///////////////////////////////////////////////////////////////////////////////////////////*/
/*////Allows popup survey to appear when "questionnaire" button is pressed//////////////////*/
/*/////////////////////////////////////////////////////////////////////////////////////////*/


$(document).ready(function () {
  $("#servicesBtn").click(function () {
    $(".survey").show();
  });
  $("#closeBtn").click(function () {
    $(".survey").hide();
    $("#questionOne").show();
  });
  $("#website, #mobile, #content").click(function () {
    $("#questionOne").hide();
    $("#questionTwo").show();
  });
  $("#personal, #professional, #hobby").click(function () {
    $("#questionTwo").hide();
    $("#questionThree").show();
  });
  $("#products, #serviceForSell, #noSell").click(function () {
    $("#questionThree").hide();
    $("#closeMessage").show();
    $("#closeMessage p").prepend("Thanks, " + clientName.value + "!");
  });
  $("#closeSurvey").click(function () {
    $("#closeMessage").hide();
  });
});







/*/////////////////////////////////////////////////////////////////////*/
/*////Submits form on contact page. Message appears.//////////////////*/
/*///////////////////////////////////////////////////////////////////*/



function insertName() {
  var unoName = document.querySelector('#firstName').value;
  var contactMessage = "Thanks, " + unoName + ". You'll hear from me shortly.";
  document.querySelector("form").style.color = "white";

  document.querySelector("form").innerHTML = contactMessage;
  
}

contactSubmit.addEventListener('click', insertName);




