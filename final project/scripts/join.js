function setTimestamp() {
    var now = new Date();
    var timestamp = now.toISOString();
    document.getElementById('timestamp').value = timestamp;
}


function saveFormData(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the user's input values from required fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const tierSelect = document.getElementById('tier');
    const tier = tierSelect.options[tierSelect.selectedIndex].text; 

    const now = new Date();
    const timestamp = now.toISOString();


    // Store the required fields in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('emailAddress', emailAddress);
    localStorage.setItem('tier', tier);
    localStorage.setItem('timestamp', timestamp);

    // Wait for the data to be stored, then redirect to the thank you page
    setTimeout(() => {
        window.location.href = 'thanks.html';
    }, 100);
}


