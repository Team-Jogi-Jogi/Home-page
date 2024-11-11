document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      
      // Simulate login - Replace with actual authentication
      console.log('Login attempt:', { email, password });
      window.location.href = 'index.html';
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = signupForm.querySelector('input[type="text"]').value;
      const email = signupForm.querySelector('input[type="email"]').value;
      const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
      const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Simulate signup - Replace with actual registration
      console.log('Signup attempt:', { username, email, password });
      window.location.href = 'index.html';
    });
  }

  // Social login handlers
  document.querySelectorAll('.social-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = button.classList.contains('google') ? 'Google' : 'GitHub';
      console.log(`${provider} login clicked`);
    });
  });
});