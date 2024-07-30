
async function validateSignup(event) {
    event.preventDefault();

    var signupMessage = document.getElementById('signup-message');
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        role: document.getElementById('role').value
    };
    // localStorage.setItem('username',formData.username);
    // localStorage.setItem('email',formData.email);

    try {
        const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful signup here
            // console.log(data.message);
            
            signupMessage.textContent = 'Signup successful!';
            localStorage.setItem('username',formData.username);
            localStorage.setItem('email',formData.email);
            localStorage.setItem('role',formData.role);
            // localStorage.setItem('OrganizerId',formData._id); 

            const isAuthenticated = true; 
            localStorage.setItem('isAuthenticated', isAuthenticated);

            switch (formData.role) {
                case 'student':
                    // window.location.href = 'http://127.0.0.1:5500/public/proproject.html';
                    window.location.href = 'http://127.0.0.1:5501/public/stuForm.html';
                    break;
                case 'recruiter':
                    console.log(formData._id);  
                    localStorage.setItem('OrganizerId',formData._id); 
                    window.location.href = 'http://127.0.0.1:5501/public/recu.html';
                    break;
                case 'organizer':
                    localStorage.setItem('OrganizerId',formData._id); 
                    window.location.href = 'http://127.0.0.1:5501/public/desevent.html';
                    break;
                default:
                    res.status(400).json({ message: 'Invalid role' });
            }
            
        } else {
            // Handle failed signup here
            console.error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('signupForm').addEventListener('submit', validateSignup);



