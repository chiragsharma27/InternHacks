

document.addEventListener("DOMContentLoaded", function() {
    fetchEvents();
});

async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:3000/Jobsubmit/jobgetevents');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        const events = data.events; // Extract events from the response
        console.log(data)
        displayEvents(events);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function displayEvents(events) {
    const eventList = document.getElementById("eventList");
    events.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `
        <strong>Company Name:</strong> ${event.companyname}<br>
        <strong>Job Title:</strong> ${event.jobtitle}<br>
        <strong>Required Skills:</strong> ${event.requiredskills}<br>
        <strong>Budget:</strong> ${event.budget}<br>
        <strong>mode:</strong> ${event.hybrid}<br>
        <strong>Location:</strong> ${event.location}<br>
        <strong>Contact Information:</strong> ${event.coninfo}<br>
        <strong>Company Website:</strong> ${event.companylink}<br>
        <strong>Description:</strong> ${event.Description}
        `;
        eventList.appendChild(li);
    });
}

function dashboard(){
    window.location.href = "http://127.0.0.1:5501/public/recu.html" 
}