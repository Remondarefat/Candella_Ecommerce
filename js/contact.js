// Contact required fields validation

function submitForm() {
    var contactFname = document.getElementById("contact-fname").value;
    var contactLname = document.getElementById("contact-lname").value;
    var contactEmail = document.getElementById("contact-email").value;
    var contactMessage = document.getElementById("contact-textarea").value;

    if (!contactFname || !contactLname || !contactEmail || !contactMessage) {
        console.log('false');
        return false;
    }

    console.log("Your message has been sent successfully.");
    window.location.href = "../index.html";
    
    // Optionally prevent the default form submission behavior
    event.preventDefault();

    return true;
}

// END -- contact required fields validation