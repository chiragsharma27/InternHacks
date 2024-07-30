document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');

    toggleNavButton.addEventListener('click', function() {
        sideNav.classList.toggle('show');
    });
});

function postevent(){
            window.location.href = "http://127.0.0.1:5501/public/postjob.html" 
}
function redirecthome(){
            window.location.href = "http://127.0.0.1:5501/public/home.html" 
}
function findevent(){
            window.location.href = "http://127.0.0.1:5501/public/postjobmy.html" 
}
function alljob(){
            window.location.href = "http://127.0.0.1:5501/public/postjobpage.html" 
}


let isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // You can replace this with your authentication logic
    document.addEventListener('DOMContentLoaded', function() {
        const logoutButton = document.getElementById('button1');
    
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            // Call the logout function
            logout();
        });
    
        function logout() {
            // Clear local storage
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
    
            // Redirect to the login page or perform any other necessary actions
            // Example redirect (uncomment and adjust as needed):
            window.location.href = "http://127.0.0.1:5501/public/home1.html";
        }
    });
    