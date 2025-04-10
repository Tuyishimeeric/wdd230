// directory.js
const membersContainer = document.getElementById('member-directory');
const toggleButton = document.getElementById('toggle-view');
let isGridView = true; // Start with grid view

// Fetch members data from JSON
async function fetchMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data.members;
}

// Function to render members in either grid or list view
function renderMembers(members) {
    membersContainer.innerHTML = ''; // Clear previous content
    const memberList = document.createElement(isGridView ? 'div' : 'ul');
    if (isGridView) {
        memberList.classList.add('member-grid');
    } else {
        memberList.classList.add('member-list');
    }

    members.forEach(member => {
        const memberItem = document.createElement(isGridView ? 'div' : 'li');
        memberItem.classList.add('member-card');
        
        const memberHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" class="member-image"/>
            <h3>${member.name}</h3>
            <p>${member.info}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership_level}</p>
        `;
        memberItem.innerHTML = memberHTML;
        memberList.appendChild(memberItem);
    });

    membersContainer.appendChild(memberList);
}

// Toggle between grid and list views
toggleButton.addEventListener('click', () => {
    isGridView = !isGridView;
    fetchMembersData().then(renderMembers); // Re-fetch and re-render members
});

// Initialize the directory
fetchMembersData().then(renderMembers);
