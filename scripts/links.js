
const baseURL = "https://tuyishimeeric.github.io/WDD230";

// Path to the links.json file in the data folder
const linksURL = "./data/links.json";

// Asynchronous function to fetch the links data from links.json
async function getLinks() {
    try {
    
        const response = await fetch(linksURL);
        

        if (!response.ok) {
            throw new Error("Failed to fetch links data");
        }

        const data = await response.json();

        // Logging the data to test it (this can be removed later)
        console.log(data);

        // Calling the displayLinks function and passing the weeks data
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

// Function to display the links from the JSON data
function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container'); // A container where the links will be displayed

    weeks.forEach(week => {
        // Create a div for each week
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        // Create a heading for the week
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekDiv.appendChild(weekTitle);

        // Create a list for the links
        const linksList = document.createElement('ul');

        // Loop through each link in the week
        week.links.forEach(link => {
            // Create a list item for each link
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}/${link.url}`; // Construct the full URL
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        // Append the links list to the week div
        weekDiv.appendChild(linksList);

        // Append the week div to the container
        linksContainer.appendChild(weekDiv);
    });
}

// Calling the getLinks function to initiate the process
getLinks();
