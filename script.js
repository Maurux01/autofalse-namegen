// Diverse subset of global names (expanded examples)
const firstNames = [
    // Western
    "James", "Maria", "Luca", "Sophie", "Mohamed", 
    // Asian
    "Wei", "Aarav", "Yuki", "Hana", "Ravi",
    // African
    "Amina", "Kwame", "Zara", "Idris", "Nala",
    // Middle Eastern
    "Fatima", "Ali", "Layla", "Omar", "Yasmin",
    // Hispanic
    "Santiago", "Valentina", "Mateo", "Isabella", "Diego"
];

const middleNames = [
    "Grace", "Hassan", "Mei", "Johan", "Anh",
    "Abdul", "Lei", "Nikolai", "Sana", "Tariq"
];

const lastNames = [
    // Global surnames
    "Kim", "Silva", "Ibrahim", "Müller", "Gonzalez",
    "Wang", "Nkosi", "Cohen", "Sato", "Khan",
    "Smith", "Patel", "Rossi", "Nguyen", "Dubois"
];

const secondLastNames = [
    "O'Connor", "Al-Farsi", "Van der Merwe", "De Luca", "Bin Ahmed",
    "MacDonald", "Delgado", "Ito", "Petersen", "Santos"
];

function generateName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const secondLastName = secondLastNames[Math.floor(Math.random() * secondLastNames.length)];
    
    const fullName = `${firstName} ${middleName} ${lastName} ${secondLastName}`;
    document.getElementById("result").textContent = fullName;
}