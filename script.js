function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_gt2gk7s","template_4r7qkpm",parms).then(alert("Email Sent"))
}