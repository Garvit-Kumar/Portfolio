function showContent() {
    let root = document.getElementById("root");
    if (root.style.display === 'none' || root.style.display === '') {
        root.style.display = 'block';
    } else {
        root.style.display = 'none';
    }
}


function goo(){
    window.open("https://drive.google.com/file/d/16VzKykNqHMhenzFrZ4ogYCt0aStkHTq9/view?usp=drivesdk", '_blank');
}

function Email(){
    
}
// ---------------------------------------------------------------------------------------------------------


(function(){
    emailjs.init("2sKhzBfEoqLLrQxOD"); 
})();

function sendEmail(event) {
    event.preventDefault(); 

    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_evtm13q", "template_pry1kg9", params)
        .then((response) => {
            document.getElementById('msg').innerText = "Email sent successfully!";
            document.getElementById('contact-form').reset(); 
        }, (error) => {
            document.getElementById('msg').innerText = "Failed to send email. Please try again.";
            console.error('Error sending email:', error);
        });
}
