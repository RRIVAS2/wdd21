const path = "data/members.json";

async function getMembers(path) {
    try {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const members = await response.json();
        console.log("Fetched members:", members);

        // Filter members to only include those with membershipLevel 2 (Silver) or 3 (Gold)
        const qualifiedMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

        // Randomly select up to 3 members from the qualified members
        const randomMembers = getRandomMembers(qualifiedMembers, 3);

        displayMembers(randomMembers);
    } catch (error) {
        console.error("Error fetching the members data:", error);
    }
}

// Function to randomly select a given number of members from the array
function getRandomMembers(array, numMembers) {
    const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, numMembers); // Return the first 'numMembers' items
}



function displayMembers(members) {
    const membersContainer = document.getElementById('members-container');

    // Clear the container before adding new cards
    membersContainer.innerHTML = '';

    members.forEach(member => {
        // Create a card for each member
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        // Create a link for the image
        const imageLink = document.createElement('a');
        imageLink.href = member.website;
        imageLink.target = '_blank';

        // Add member image
        const memberIcon = document.createElement('img');
        memberIcon.src = `images/${member.icon}`;
        memberIcon.alt = `${member.name} icon`;
        memberIcon.classList.add('member-icon');
        imageLink.appendChild(memberIcon);
        memberCard.appendChild(imageLink);

        // Add member name
        const memberName = document.createElement('h3');
        memberName.textContent = member.name;
        memberCard.appendChild(memberName);

        // Add member address
        const memberAddress = document.createElement('p');
        memberAddress.textContent = `Address: ${member.address}`;
        memberCard.appendChild(memberAddress);

        // Add member phone
        const memberPhone = document.createElement('p');
        memberPhone.textContent = `Phone: ${member.phone}`;
        memberCard.appendChild(memberPhone);

        // Add additional info
        const memberInfo = document.createElement('p');
        memberInfo.textContent = member.additionalInfo;
        memberCard.appendChild(memberInfo);

        // Append member card to the container
        membersContainer.appendChild(memberCard);
    });
}

// Call the function to fetch and display the members
getMembers(path);