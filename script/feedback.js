// Burger Menu
const navLinks = document.getElementById('navLinks');

function showMenu(){
  navLinks.style.right ='0';
}
function hideMenu(){
  navLinks.style.right ='-200px';
}

// GET Form Data
document.addEventListener("DOMContentLoaded", function () {
  const feedbackList = document.getElementById("container");

  fetch("https://be-semarang-6-production.up.railway.app/api/feedback", {
      method: "GET",
  })
  .then((response) => response.json())
  .then((data) => {
      data.forEach((feedback) => {
          const feedbackItem = document.createElement("div");
          feedbackItem.innerHTML = `
              <div class="column">
              <h3>Name:</h3>
              <p>${feedback.name}</p>
              <br>
              <h3>Message:</h3>
              <p>${feedback.message}</p>
              </div>
          `;
          feedbackList.appendChild(feedbackItem);
      });
  })
  .catch((error) => {
    alert(`Error message: ${error.message}`);
  });
});