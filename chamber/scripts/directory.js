
const baseURL = "https://tuyishimeeric.github.io/WDD230/chamber";
const linksURL = "data/members.json";

// Fetching member data
async function getMembers() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayMembers(data.members); 
    } catch (error) {
        console.log("Error fetching members data:", error);
    }
}

// Display the members in card or list view
function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = ""; 

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="Logo of ${member.name}" class="member-image" />
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
            <p class="badge ${member.membership_level.toLowerCase()}">${member.membership_level} Member</p>
        `;

        container.appendChild(memberCard);
    });
}

getMembers();

// Toggle between grid and list view
const toggleButton = document.getElementById('toggle-view');
toggleButton.addEventListener('click', function () {
    const container = document.getElementById('members-container');
    container.classList.toggle('grid-view');

    if (container.classList.contains('grid-view')) {
        toggleButton.textContent = "Switch to List View";
    } else {
        toggleButton.textContent = "Switch to Grid View";
    }
});
