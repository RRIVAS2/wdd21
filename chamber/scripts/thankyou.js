function displayFormData() {
    // Retrieve stored data from localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const emailAddress = localStorage.getItem('emailAddress');
    const mobileNumber = localStorage.getItem('mobileNumber');
    const organizationName = localStorage.getItem('organizationName');
    const membershipLevel = localStorage.getItem('membershipLevel');

    // Log the retrieved values
    console.log('Retrieved Data:', {
        firstName,
        lastName,
        emailAddress,
        mobileNumber,
        organizationName,
        membershipLevel
    });

    // Display the data on the thankyou.html page if available
    if (firstName && lastName && emailAddress && mobileNumber && organizationName && membershipLevel) {
        document.getElementById('display-firstname').textContent = firstName;
        document.getElementById('display-lastname').textContent = lastName;
        document.getElementById('display-email').textContent = emailAddress;
        document.getElementById('display-mobile').textContent = mobileNumber;
        document.getElementById('display-organization').textContent = organizationName;
        document.getElementById('display-membership').textContent = membershipLevel;
    } else {
        console.log('Some or all data is missing from localStorage');
    }
}

displayFormData();