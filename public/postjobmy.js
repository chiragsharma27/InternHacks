

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
        displayEvents(events);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function displayEvents(events) {
    const eventList = document.getElementById("eventList");
    events.forEach(event => {
        var OrganizerId = localStorage.getItem('OrganizerId');
        console.log(OrganizerId);
        console.log(event.Organizer);
        if (event.Organizer == OrganizerId) {
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
            <strong>Description:</strong> ${event.Description}<br><br>
                
                <button class="edit-btn" data-id="${event._id}">Edit</button>
                <button class="delete-btn" data-id="${event._id}">Delete</button>
            `;
            eventList.appendChild(li);

            // Add event listener for edit button
            li.querySelector('.edit-btn').addEventListener('click', () => {
                // Handle edit functionality, you can redirect to an edit page or show a modal
                // For example, you can redirect to an edit page passing the event ID as a query parameter
                // editEventForm(event._id);
                window.location.href = `editJob.html?id=${event._id}`;
            });

            // Add event listener for delete button
            li.querySelector('.delete-btn').addEventListener('click', () => {
                // Handle delete functionality, you can show a confirmation dialog before deleting
                // For example, you can show a confirmation dialog and if user confirms, make a DELETE request to delete the event
                const confirmDelete = confirm("Are you sure you want to delete this event?");
                if (confirmDelete) {
                    console.log(confirmDelete);
                    deleteEvent(event._id);
                }
            });
        }
    });
}

async function deleteEvent(eventId) {
    try {
        const response = await fetch(`http://localhost:3000/Jobsubmit/jobdeleteEvent/${eventId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete event');
        }
        // If deletion successful, reload the events list
        fetchEvents();
    } catch (error) {
        console.error('Error deleting event:', error);
    }
}


function dashboard(){
    window.location.href = "http://127.0.0.1:5501/public/recu.html" 
}