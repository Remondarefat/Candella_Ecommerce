// Contact required fields validation

function submitForm() {
    var contactFname = document.getElementById("contact-fname").value;
    var contactLname = document.getElementById("contact-lname").value;
    var contactEmail = document.getElementById("contact-email").value;
    var contactMessage = document.getElementById("contact-textarea").value;
    if (!contactFname || !contactLname || !contactEmail || !contactMessage) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Your message has been sent successfully.");
}
// END -- contact required fields validation