# portfolio

This is a straightforward, simple website desiged to both showcase projects and provide a means to contact the developer. Each page displays a header, page specific content, and a footer.

The index.html page displays a photograph relevant to the theme of "ElectricGoon." The portfolio.html page currently only displays the message "Check Back Soon." On the services.html page, a "survey" button will display a survey the user can fill out and submit in order to request work from the developer. Finally, the contact.html page contains a general contact form. 

The navigation bar will convert into a drop down menu when a page is less than 700 pixels. A jQuery function creates the toggle effect. I originally attempted to use a hover effect in CSS. However, this created a "sticky hover" in mobile formats, so I decided to use jQuery instead. 

The survey on the services.html page utilizes jQuery in order to access the survey. The survey is a series of modals that appear and disappear as the user answers questions. I used regular expressions to validate the phone number and email on the contact information section. I haven't worked it out completely, so to simplify it in the present I wrote a function that sets the counter to 0 and input value to '' when backspace is pressed in the phone number field.  

Finally, the contact page uses vanilla javascript to give functionality to the submit button. When you enter your first name and submit the form, your name will appear in a thank-you message. I built it before I reached the jQuery tutorials in Treehouse or else I would have probably used jQuery again. 

That's it. That's my first website. Thanks to Brian and all of the Code Louisville staff and mentors for helping me get here. 