
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleNavButton = document.getElementById('toggleNavButton');
//     const sideNav = document.getElementById('sideNav');

//     toggleNavButton.addEventListener('click', function() {
//         sideNav.classList.toggle('show');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Select the elements from the DOM
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');
    // const logout = document.getElementById('button1');
    // const logoutButton = document.getElementById('button1');
    // Check if toggleNavButton exists before adding an event listener
    if (toggleNavButton) {
        toggleNavButton.addEventListener('click', function() {
            if (sideNav) {
                sideNav.classList.toggle('show');
            }
        });
    }
    

});

   
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
    
     
    // console.log(isAuthenticated);
    // let btn;
    // let btn2;
    // btn = document.querySelector('.cls')
    // btn2 = document.querySelector('.cls2')
    // // Function to hide login and signup buttons if the user is authenticated
    // function hideLoginAndSignupButtons() {
    //  btn = document.querySelector('.cls')
    //  btn2 = document.querySelector('.cls2')
        
    //     console.log(btn);
        
    //     if (isAuthenticated) {
    //     btn.classList.add('btn')
    //     btn2.classList.remove('btn2')
    //     }
    //     else{
    //     btn.classList.remove('btn')
    //     btn2.classList.add('btn2')
    //     }
    // }
    
    // // Call the function to hide buttons when the page loads
    // window.addEventListener('load', hideLoginAndSignupButtons);

    // const logout = document.getElementById('button1');
    // logout.addEventListener('click', function() {
    //     if (logout) {
    //         console.log("logout is here");
    //         window.location.href = "http://127.0.0.1:5501/public/home1.html";
    //     }
    // });
    
    // function logout(){

//     console.log("logout is here");
//     isAuthenticated =false;
//     console.log(isAuthenticated)
    
     
//     // if (isAuthenticated=='true') {
//     //     btn.classList.add('btn')
//     //     btn2.classList.remove('btn2')
//     //     }
//     //     else{
//         // btn.classList.remove('btn')
//         // btn2.classList.add('btn2')
//         localStorage.removeItem('username');
//         localStorage.removeItem('email');
//         localStorage.removeItem('OrganizerId');
//         localStorage.removeItem('role');
//         // localStorage.removeItem('organizerId');
//         // localStorage.removeItem('Organizer');
//         // window.location.href = "http://127.0.0.1:5501/public/home1.html" 
//         // }

//         localStorage.setItem('isAuthenticated', isAuthenticated);

//     // isAuthenticated = false;
    
//     // // Redirect to the home page
//     window.location.href = "http://127.0.0.1:5501/public/home1.html";


// }


// function openSignupPage() {
//     window.location.href = "http://127.0.0.1:5501/public/index.html"
// }

// function openLoginPage() {
//     window.location.href = "http://127.0.0.1:5501/public/login.html"
// }

//profile mate che jyare user login kare pacchi aavee che



// function redirectprofile(){

// }
function profile(){
    const role1=localStorage.getItem('role');

    switch (role1) {
        case 'student':
            window.location.href = 'http://127.0.0.1:5501/public/project.html';
            break;
        case 'recruiter':
            window.location.href = 'http://127.0.0.1:5501/public/recu.html';
            break;
        case 'organizer':
            window.location.href = 'http://127.0.0.1:5501/public/desevent.html';
            break;
        default:
            console.log('Invalid role');
    }
}