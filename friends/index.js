let list = ['Aslin', 'Manoj', 'Sherin', 'Andrea', 'Beenu', 'Jose', 'Adeno', 'Priya', 'Sija', 'Sreejith', 'Riswin', 'Hannibal']; 

function generate() {
    // Generate a random index based on the length of the list
    let randomIndex = Math.floor(Math.random() * list.length);
    
    // Get the name from the list at the random index
    let selectedPerson = list[randomIndex];
    
    // Display the selected person in the 'friend' element
    document.getElementById('friend').innerText = ` ${selectedPerson}`;
}
