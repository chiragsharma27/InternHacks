document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');

    toggleNavButton.addEventListener('click', function() {
        sideNav.classList.toggle('show');
    });
});

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var companyname = document.getElementById('companyname').value.trim();
    var jobtitle = document.getElementById('jobtitle').value.trim();
    var requiredskills = document.getElementById('requiredskills').value.trim();
    var budget = document.getElementById('budget').value.trim();
    var hybrid = document.getElementById('hybrid').value.trim();
    var location = document.getElementById('location').value.trim();
    var coninfo = document.getElementById('coninfo').value.trim();
    var companylink = document.getElementById('companylink').value.trim();
    var Description = document.getElementById('jobDescription').value.trim();

    var OrganizerId = localStorage.getItem('OrganizerId');

    // Validation
    if (companyname === '' || jobtitle === '' || requiredskills === '' || budget === '' || hybrid === '' || location === '' || coninfo === '' || companylink === '' || Description === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Prepare the form data
    var formData = {
        companyname: companyname,
        jobtitle: jobtitle,
        requiredskills: requiredskills,
        budget: budget,
        hybrid: hybrid,
        location: location,
        coninfo: coninfo,
        companylink: companylink,
        Description: Description,
        Organizer: OrganizerId
    };

    // Make a POST request to the API
    fetch('http://localhost:3000/Jobsubmit/jobevent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Job data sent successfully:', data);
        // Reset form after successful submission
        document.getElementById('event-form').reset();
        // Handle any further actions like showing a success message
    })
    .catch(error => {
        console.error('Error sending job data:', error);
        alert('An error occurred while submitting the form.');
    });
});

function dashboard(){
    window.location.href = "http://127.0.0.1:5501/public/recu.html" 
}