// Burger Menu
const navLinks = document.getElementById('navLinks');

function showMenu(){
  navLinks.style.right ='0';
}
function hideMenu(){
  navLinks.style.right ='-200px';
}

// Scroll Button
document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scrollBtn');
  const content = document.getElementById('content');

  if (scrollButton && content) {
    scrollButton.addEventListener('click', function(e) {
      e.preventDefault()
      const targetScroll = content.offsetTop + content.offsetHeight / 15;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    });
  }
});

// Form Sending
  const formCustomer = document.getElementById('formCustomer');

  formCustomer.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const feedbackData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  };

  fetch('https://be-semarang-6-production.up.railway.app/proses_feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(feedbackData)
  }).then( (res) =>{
    if(res.ok){
      alert('Thank You For Your Feedback!')
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert('Send Feedback Failed.')
    }
  }).catch((error) => {
    alert(`Error message: ${error.message}`);
  })
});