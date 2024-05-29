function sendmail() {
    let params= {
        email : document.getElementById("email").value,
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_0xgk60o", "template_8y5upv8", params)
    emailjs.send("service_0xgk60o", "template_zqfmypm", params).then(function(response) {
        alert("Email sent!");
        window.location = "index.html#contact-me";
    }, function(error) {
        alert("Failed to send email. Error: " + JSON.stringify(error));
    });
    window.location= "index.html"
}