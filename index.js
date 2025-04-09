function sendMail() {
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_60uyshx', 'template_i321zgr', params);
}
