const path = "data/members.json"

async function getMembers(path) {
    try {
        const response = await fetch(path);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  
        }

        const members = await response.json();
        console.log("Fetched members:", members);  
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching the members data:", error);  
    }
}


document.getElementById('grid').addEventListener('click', function() {
    const membersContainer = document.getElementById('members-container');
    membersContainer.classList.remove('list-view');
    membersContainer.classList.add('grid-view');
});

document.getElementById('list').addEventListener('click', function() {
    const membersContainer = document.getElementById('members-container');
    membersContainer.classList.remove('grid-view');
    membersContainer.classList.add('list-view');
});

function displayMembers(members) {
    const membersContainer = document.getElementById('members-container'); 
    
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
        // Append the image to the link
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

/*
        // Add member website link
        const memberWebsite = document.createElement('a');
        memberWebsite.href = member.website;
        memberWebsite.textContent = 'Visit Website';
        memberWebsite.target = '_blank'; // Open in new tab
        memberWebsite.id = 'visit-website'; // Add an ID for styling
        memberCard.appendChild(memberWebsite);*/



        // Add member card to the container
        membersContainer.appendChild(memberCard);
    });
}

// Call the function to fetch and display the members
getMembers(path);

