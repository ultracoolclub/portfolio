var contactSubmit = document.querySelector('#contactButton');
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
/*////Allows popup survey to appear when "Survey" button is pressed//////////////////*/
/*/////////////////////////////////////////////////////////////////////////////////////////*/


$(document).ready(function () {
  $("#servicesBtn").click(function () {
    $(".survey").show();
  });
  $("#closeBtn").click(function () {
    var nameFirst = document.querySelector("#clientName").value;
    var nameLast = document.querySelector("#clientLast").value;
    var clientNumber = document.querySelector("#clientNumber").value;
    var clientEmail = document.querySelector("#clientEmail").value;
    var regExpressNumber = /^\((\d{3})\)(\d{3})-(\d{4})$/;
    var regExpressEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var error1 = document.querySelector("#error1");

    if (nameFirst && nameLast && clientNumber && clientEmail == '') {
      return false;
    } else if (!(clientNumber).match(regExpressNumber)) {
      return false;
    } else if (!(clientEmail).match(regExpressEmail)) {
      return false;
    } else{
      $(".survey").hide();
      $("#questionOne").show();
    };
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

/*////Autofills parentheses and hyphen in phone number//////////////////*/

var i = 0;
$(document).ready(function () {
  $('#clientNumber').keypress(function () {
    i += 1;
    console.log(i)
    if (i == 1) {
      $("#clientNumber").val(function (n, c) {
        return c + "(";
      });
    };
    if (i == 4) {
      $("#clientNumber").val(function (n, c) {
        return c + ")";
      });
    };
    if (i == 7) {
      $("#clientNumber").val(function (n, c) {
        return c + "-";
      });
    };
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




