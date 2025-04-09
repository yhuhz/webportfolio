function sendMail() {
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_60uyshx', 'template_i321zgr', params);
}

function validateAndSendMail(event) {
  // Prevent the default form submit behavior
  event.preventDefault();

  // Get form field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Check if required fields are filled
  if (!name || !email || !message) {
    const modal = new bootstrap.Modal(document.getElementById('fillUpFields'));
    modal.show();
    return;
  }

  // If validation passes, send the email and show the modal
  sendMail(); // Call your sendMail function

  // Programmatically trigger the modal
  const modal = new bootstrap.Modal(document.getElementById('submitConfirm'));
  modal.show();
}
