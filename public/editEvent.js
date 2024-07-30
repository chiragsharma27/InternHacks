//    document.addEventListener("DOMContentLoaded", function() {
//             // Fetch event ID from query parameter
//             const urlParams = new URLSearchParams(window.location.search);
//             const eventId = urlParams.get('id');
            
//             fetchEventDetails(eventId);
//         });

//         async function fetchEventDetails(eventId) {
//             try {
//                 const response = await fetch(`http://localhost:3000/Eventsubmit/getevents/${eventId}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch event details');
//                 }
//                 const eventData = await response.json();
//                 console.log("eventData:",eventData);
//                 console.log("Event Data Type:", typeof eventData.EventName);
//                 // console.log(typeof(requestBody.eventData.EventName));
//                 displayEventDetails(eventData);
//             } catch (error) {
//                 console.error('Error fetching event details:', error);
//             }
//         }

//         function displayEventDetails(eventData) {
//             const eventDetailsDiv = document.getElementById("eventDetails");
//             eventDetailsDiv.innerHTML = `
//                 <strong>Event Name:</strong> ${eventData.EventName}<br>
//                 <strong>Venue:</strong> ${eventData.Venue}<br>
//                 <strong>Participants Limit:</strong> ${eventData.Participants_Limit}<br>
//                 <strong>Date:</strong> ${eventData.Date}<br>
//                 <strong>Time:</strong> ${eventData.Time}<br>
//                 <strong>Description:</strong> ${eventData.Description}<br>
//                 <strong>Organizer:</strong> ${eventData.Organizer}<br>
//             `;

//             // Fill input fields with existing event data for editing
//             const editEventForm = document.getElementById("editEventForm");
//             editEventForm.elements.EventName.value = eventData.EventName;
//             editEventForm.elements.Venue.value = eventData.Venue;
//             editEventForm.elements.participantsLimit.value = eventData.Participants_Limit;
//             editEventForm.elements.date.value = eventData.Date;
//             editEventForm.elements.time.value = eventData.Time;
//             editEventForm.elements.Description.value = eventData.Description;
        
        
//         }

        
//         // Add event listener for form submission
//         document.getElementById("editEventForm").addEventListener("submit", async function(event) {
//             event.preventDefault();
//             const formData = new FormData(this);
//             const editedEventData = Object.fromEntries(formData.entries());

//             const eventId = new URLSearchParams(window.location.search).get('id');

//             try {
//                 const response = await fetch(`http://localhost:3000/Eventsubmit/editEvent/${eventId}`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(editedEventData)
//                 });
//                 if (!response.ok) {
//                     throw new Error('Failed to edit event');
//                 }
//                 // If editing successful, redirect back to the events list page
//                 window.location.href = 'events.html';
//             } catch (error) {
//                 console.error('Error editing event:', error);
//             }
//         });
 

document.addEventListener("DOMContentLoaded", function() {
    // Fetch event ID from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    fetchEventDetails(eventId);
});

async function fetchEventDetails(eventId) {
    try {
        const response = await fetch(`http://localhost:3000/Eventsubmit/getevents/${eventId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch event details');
        }
        const eventData = await response.json();
        console.log("eventData:",eventData);
        console.log("Event Data Type:", typeof eventData.EventName);
        // console.log(typeof(requestBody.eventData.EventName));
        displayEventDetails(eventData);
    } catch (error) {
        console.error('Error fetching event details:', error);
    }
}

function displayEventDetails(eventData) {
    const eventDetailsDiv = document.getElementById("eventDetails");
    const formattedDate = formatDate(eventData.Date); // Format the date
    eventDetailsDiv.innerHTML = `
        <strong>Event Name:</strong> ${eventData.EventName}<br>
        <strong>Venue:</strong> ${eventData.Venue}<br>
        <strong>Participants Limit:</strong> ${eventData.Participants_Limit}<br>
        <strong>Date:</strong> ${formattedDate}<br>
        <strong>Time:</strong> ${eventData.Time}<br>
        <strong>Description:</strong> ${eventData.Description}<br>
        
    `;

    // Fill input fields with existing event data for editing
    const editEventForm = document.getElementById("editEventForm");
    editEventForm.elements.EventName.value = eventData.EventName;
    editEventForm.elements.Venue.value = eventData.Venue;
    editEventForm.elements.participantsLimit.value = eventData.Participants_Limit;
    editEventForm.elements.date.value = eventData.Date;
    // Function to format date string to "yyyy-MM-dd" format
function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
    editEventForm.elements.time.value = eventData.Time;
    editEventForm.elements.Description.value = eventData.Description;
}



// Add event listener for form submission
document.getElementById("editEventForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const editedEventData = Object.fromEntries(formData.entries());

    const eventId = new URLSearchParams(window.location.search).get('id');

    try {
        const response = await fetch(`http://localhost:3000/Eventsubmit/editEvent/${eventId}`, {
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
        window.location.href = 'http://127.0.0.1:5501/public/eventmy.html';
    } catch (error) {
        console.error('Error editing event:', error);
    }
});
