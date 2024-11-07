function logout() {
  localStorage.removeItem('authToken'); // Remove the authentication token

  // Make a request to the server to invalidate the token (if necessary)
  // ...

  alert('Anda telah logout.');
  window.location.href = 'login.html'; // Redirect to the login page
}
