var contactSubmit = document.getElementById('contactButton');
var contactInfo = document.querySelector('form');
;
contactSubmit.addEventListener('click', ()=> {
  contactInfo.textContent = "Thanks. I'll talk to you soon.";
  contactInfo.style.color = "white";
  contactInfo.style.fontSize = "4em";
});
