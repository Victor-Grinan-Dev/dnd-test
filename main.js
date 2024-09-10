// Lists of possible character attributes
const names = ["Aragorn", "Gandalf", "Legolas", "Gimli", "Frodo"];
const classes = ["Fighter", "Wizard", "Rogue", "Cleric"];
const races = ["Human", "Elf", "Dwarf", "Halfling"];
const backgrounds = ["Noble", "Hermit", "Criminal", "Scholar"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomCharacter() {
    const name = getRandomElement(names);
    const charClass = getRandomElement(classes);
    const race = getRandomElement(races);
    const background = getRandomElement(backgrounds);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Character Profile</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Class:</strong> ${charClass}</p>
        <p><strong>Race:</strong> ${race}</p>
        <p><strong>Background:</strong> ${background}</p>
    `;
}