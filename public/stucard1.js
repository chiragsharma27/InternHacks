// Function to fetch user profiles from the backend API
async function fetchUserProfiles() {
    try {
        const response = await fetch('http://localhost:3000/userprofile/students');
        const userData = await response.json();
        return userData.students;
    } catch (error) {
        console.error('Error fetching user profiles:', error);
        return [];
    }
}

// Function to create user profile cards
async function createAndDisplayUserCards() {
    const users = await fetchUserProfiles();
    const cardContainer = document.getElementById('card-container');
    const searchInput = document.querySelector('.search-input');
    const searchValue = searchInput.value.toLowerCase();
    cardContainer.innerHTML = '';

    let foundUsers = false;

    users.forEach(user => {
        if (user.language.toLowerCase().includes(searchValue)) {
            foundUsers = true;

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = 'job1.jpeg';

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const fullNamePara = document.createElement('p');
            fullNamePara.textContent = `Full Name: ${user.fullName}`;

            const description = document.createElement('p');
            description.textContent = `Language: ${user.language}`;

            // Create container for icons
            const iconsContainer = document.createElement('div');
            iconsContainer.classList.add('icons-container');

            // LinkedIn Icon
            const linkedinIcon = document.createElement('i');
            linkedinIcon.classList.add('fab', 'fa-linkedin', 'icon');
            linkedinIcon.style.cursor = 'pointer';
            linkedinIcon.onclick = function() {
                window.location.href = user.linkedin;
            };
            iconsContainer.appendChild(linkedinIcon);

            // GitHub Icon
            const githubIcon = document.createElement('i');
            githubIcon.classList.add('fab', 'fa-github', 'icon');
            githubIcon.style.cursor = 'pointer';
            githubIcon.onclick = function() {
                window.location.href = user.github;
            };
            iconsContainer.appendChild(githubIcon);

            cardContent.appendChild(fullNamePara);
            cardContent.appendChild(document.createElement('br'));
            cardContent.appendChild(description);
            cardContent.appendChild(document.createElement('br'));
            cardContent.appendChild(iconsContainer);

            card.appendChild(img);
            card.appendChild(cardContent);

            cardContainer.appendChild(card);
        }
    });

    if (!foundUsers) {
        const noUsersMessage = document.createElement('p');
        noUsersMessage.textContent = 'No User Found';
        cardContainer.appendChild(noUsersMessage);
    }
}

// Call the function to create and display user profile cards
createAndDisplayUserCards();

// Function to redirect to Home page
function redirecthome() {
    window.location.href = "http://127.0.0.1:5501/public/home.html";
}

// Function to redirect to Student page
function redirectstudent() {
    window.location.href = "http://127.0.0.1:5501/public/project.html";
}
