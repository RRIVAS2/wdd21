const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

/*
async function getProphetData () {
    url;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Response status: ${response.status}');
        }
    

    const json = await response.json();
    console.log(json);
} catch (error) {
    console.error(error.message)
}
}*/


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data response
  }
  
  getProphetData();