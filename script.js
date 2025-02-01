function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        phone : document.getElementById("phone").value,

    }
    email.js.send("service_0sx5n7i", "template_qbulr68", params).then(function (res) {
        alert("Success!" + res.status);
    })
}