function displayFormData() {
    // Retrieve stored data from localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const emailAddress = localStorage.getItem('emailAddress');
    const tier = localStorage.getItem('tier');
    const timestamp = localStorage.getItem('timestamp');


    // Display the data on the thankyou.html page if available
    if (firstName && lastName && emailAddress && tier) {
        document.getElementById('display-firstname').textContent = firstName;
        document.getElementById('display-lastname').textContent = lastName;
        document.getElementById('display-email').textContent = emailAddress;
        document.getElementById('display-tier').textContent = tier;
        document.getElementById('display-timestamp').textContent = timestamp;
    } else {
        console.log('Some or all data is missing from localStorage');
    }
}

displayFormData();