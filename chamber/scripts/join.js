function setTimestamp() {
    var now = new Date();
    var timestamp = now.toISOString();
    document.getElementById('timestamp').value = timestamp;
}

// Select all open buttons and close buttons
const openButtons = document.querySelectorAll(".openButton");
const closeButtons = document.querySelectorAll(".closeButton");
const dialogBoxes = document.querySelectorAll(".dialogBox");


// Add event listeners to each open button
openButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        dialogBoxes[index].showModal();
    });
});

// Add event listeners to each close button
closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        dialogBoxes[index].close();
    });
});



function saveFormData(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the user's input values from required fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const organizationName = document.getElementById('organizationName').value;
    const membershipLevel = document.getElementById('membershipLevel').value;

    const now = new Date();
    const timestamp = now.toISOString();

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email Address:", emailAddress);
    console.log("Mobile Number:", mobileNumber);
    console.log("Organization Name:", organizationName);
    console.log("Membership Level:", membershipLevel);
    console.log("Timestamp:", timestamp);

    // Store the required fields in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('emailAddress', emailAddress);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('organizationName', organizationName);
    localStorage.setItem('membershipLevel', membershipLevel);
    localStorage.setItem('timestamp', timestamp);

    // Wait for the data to be stored, then redirect to the thank you page
    setTimeout(() => {
        window.location.href = 'thankyou.html';
    }, 100);
}


