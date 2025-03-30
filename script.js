// Shared functions for all pages
function showMessage() {
    document.getElementById('specialMessage').classList.toggle('hidden');
  }
  
  function showExtraReasons() {
    document.getElementById('extraReasons').classList.toggle('hidden');
  }
  
  function showVideoMessage() {
    document.getElementById('videoMessage').classList.toggle('hidden');
  }
  
  function showSecretPlan() {
    document.getElementById('secretPlan').classList.toggle('hidden');
  }


// Load navbar into all elements with class "navbar-container"
document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.querySelectorAll('.navbar-container').forEach(el => {
          el.innerHTML = data;
        });
      });
  });