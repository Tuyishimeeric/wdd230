
const baseURL = "https://tuyishimeeric.github.io/WDD230/chamber";


const linksURL = "data/members.json";

// Fetching member data
async function getMembers() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayMembers(data.members); // Call function to display member info
    } catch (error) {
        console.log("Error fetching members data:", error);
    }
}

// Function to display the members in cards or list view
function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = ""; // Clear any previous content

    members.forEach(member => {
        // Create a card for each member
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card'); // Add class for styling

        // Create the content for each member
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" class="member-image" />
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
        `;

        // Append to the container
        container.appendChild(memberCard);
    });
}

// Call the function to fetch and display members on page load
getMembers();

// Toggle between grid and list view
const toggleButton = document.getElementById('toggle-view');
toggleButton.addEventListener('click', function() {
    const container = document.getElementById('members-container');
    container.classList.toggle('grid-view'); // Toggle class for grid view
});
