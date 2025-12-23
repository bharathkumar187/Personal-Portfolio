<script>
function sendemail() {

    var from_name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var templateParams = {

        email : email,
        message: message,
        to_name: "Bharath Kumar"
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }, function(error) {
        alert("Failed to send message!");
        console.log(error);
    });
}
</script>
