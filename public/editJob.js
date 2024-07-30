
document.addEventListener("DOMContentLoaded", function() {
    // Fetch event ID from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    fetchEventDetails(eventId);
});

async function fetchEventDetails(eventId) {
    try {
        const response = await fetch(`http://localhost:3000/Jobsubmit/jobgetevents/${eventId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch event details');
        }
        const eventData = await response.json();
        console.log("eventData:",eventData);
        console.log("Event Data Type:", typeof eventData.companyname);
        // console.log(typeof(requestBody.eventData.EventName));
        displayEventDetails(eventData);
    } catch (error) {
        console.error('Error fetching event details:', error);
    }
}

function displayEventDetails(eventData) {
    const eventDetailsDiv = document.getElementById("eventDetails");
    // const formattedDate = formatDate(eventData.Date); // Format the date
    eventDetailsDiv.innerHTML = `
    <strong>Company Name:</strong> ${eventData.companyname}<br>
    <strong>Job Title:</strong> ${eventData.jobtitle}<br>
    <strong>Required Skills:</strong> ${eventData.requiredskills}<br>
    <strong>Budget:</strong> ${eventData.budget}<br>
    <strong>mode:</strong> ${eventData.hybrid}<br>
    <strong>Location:</strong> ${eventData.location}<br>
    <strong>Contact Information:</strong> ${eventData.coninfo}<br>
    <strong>Company Website:</strong> ${eventData.companylink}<br>
    <strong>Description:</strong> ${eventData.Description}<br><br>
   
    `;

    // Fill input fields with existing event data for editing
    const editEventForm = document.getElementById("editEventForm");
    editEventForm.elements.companyname.value = eventData.companyname;
    editEventForm.elements.jobtitle.value = eventData.jobtitle;
    editEventForm.elements.requiredskills.value = eventData.requiredskills;
    editEventForm.elements.budget.value = eventData.budget;
    editEventForm.elements.hybrid.value = eventData.hybrid;
    editEventForm.elements.location.value = eventData.location;
    editEventForm.elements.coninfo.value = eventData.coninfo;
    editEventForm.elements.companylink.value = eventData.companylink;
    editEventForm.elements.Description.value = eventData.Description;
}



// Add event listener for form submission
document.getElementById("editEventForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const editedEventData = Object.fromEntries(formData.entries());

    const eventId = new URLSearchParams(window.location.search).get('id');

    try {
        const response = await fetch(`http://localhost:3000/Jobsubmit/jobeditEvent/${eventId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedEventData)
        });
        if (!response.ok) {
            throw new Error('Failed to edit event');
        }
        // If editing successful, redirect back to the events list page
        window.location.href = 'http://127.0.0.1:5501/public/postjobmy.html';
    } catch (error) {
        console.error('Error editing event:', error);
    }
});
