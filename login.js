const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
    } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(usernameValue)) {
        usernameError.textContent = 'Please enter a valid username (3-20 characters, alphanumeric and underscores only)';
        usernameError.style.display = 'block';
    } else {
        usernameError.style.display = 'none';
    }

    if (passwordValue === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/.test(passwordValue)) {
        passwordError.textContent = 'Please enter a valid password (8-32 characters, at least one uppercase letter, one lowercase letter, and one digit)';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    if (usernameValue !== '' && passwordValue !== '' && /^[a-zA-Z0-9_]{3,20}$/.test(usernameValue) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/.test(passwordValue)) {
        loginForm.submit();
    }
});