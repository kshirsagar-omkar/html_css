// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
    initializeForm();
});

// Update time display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Initialize form
function initializeForm() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin();
    });

    // Add input validation
    const inputs = loginForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });
    });
}

// Validate input fields
function validateInput(input) {
    if (input.value.trim()) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
}

// Handle login
function handleLogin() {
    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!studentId || !password) {
        showError('Please fill in all fields');
        return;
    }

    // Show loading state
    const submitButton = document.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status"></span>
        Signing in...
    `;
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;

        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Welcome Back!',
            text: 'Login successful',
            background: '#282828',
            color: '#ffffff',
            confirmButtonColor: '#ffa116',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            // Add redirect logic here
            console.log('Login successful, redirecting...');
        });
    }, 1500);
}

// Show error message
function showError(message) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        background: '#282828',
        color: '#ffffff',
        confirmButtonColor: '#ffa116'
    });
}

// Add loading animation for better UX
function addLoadingEffects() {
    // Add shimmer effect to inputs when loading
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('is-focusing');
        });

        input.addEventListener('blur', function() {
            this.closest('.form-group').classList.remove('is-focusing');
        });
    });
}

// Add field validation with better UX
function validateField(field) {
    const value = field.value.trim();
    const formGroup = field.closest('.form-group');
    
    if (value) {
        formGroup.classList.add('is-valid');
        formGroup.classList.remove('is-invalid');
        return true;
    } else {
        formGroup.classList.remove('is-valid');
        formGroup.classList.add('is-invalid');
        return false;
    }
}

// Add real-time validation feedback
function setupFormValidation() {
    const form = document.getElementById('loginForm');
    const fields = form.querySelectorAll('.form-control');

    fields.forEach(field => {
        field.addEventListener('input', () => {
            validateField(field);
        });

        field.addEventListener('blur', () => {
            validateField(field);
        });
    });
}

// Initialize all features
function initializeFeatures() {
    updateTime();
    setupFormValidation();
    addLoadingEffects();
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFeatures);

// Add button hover effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add this to initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeFeatures();
    addButtonEffects();
});
