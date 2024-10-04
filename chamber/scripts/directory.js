//footer date and time
let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;


  // menu button for small screen
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });


