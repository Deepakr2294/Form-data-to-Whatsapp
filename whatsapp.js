function sendToWhatsapp() {
    let number = "+918743046672";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let url = "https://wa.me/" + number + "?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Message: " + encodeURIComponent(message);

    window.open(url, '_blank').focus();

    setTimeout(function() {
        window.location.href = 'thankyou.html';
    }, 1000);
}
