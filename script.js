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
    }, function(error) {
        alert("Failed to send email. Error: " + JSON.stringify(error));
    });
}

function resetmail(){
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}