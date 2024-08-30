function purchase(item) {
    alert(item + " satın alındı!");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mesajınız gönderildi!');
});
