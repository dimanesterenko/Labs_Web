 class Refrigerator {
    constructor(color, brand, model, price) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const refrigeratorsArray = [
    new Refrigerator("Білий", "Samsung", "123ABC", 81200),
    new Refrigerator("Чорний", "LG", "456XYZ", 31500),
    new Refrigerator("Сріблястий", "Whirlpool", "789LMN", 20100),
    new Refrigerator("Червоний", "Bosch", "234EFG", 11300),
    new Refrigerator("Синій", "Haier", "567HIJ", 91400),
];

function displayRefrigerators() {
    const resultDiv = document.getElementById("result");
    const table = document.createElement("table");
    const headerRow = table.insertRow(0);
    for (const prop in refrigeratorsArray[0]) {
        const headerCell = document.createElement("th");
        headerCell.textContent = prop;
        headerRow.appendChild(headerCell);
    }
    refrigeratorsArray.forEach((refrigerator) => {
        const row = table.insertRow();

        for (const prop in refrigerator) {
            const cell = row.insertCell();
            cell.textContent = refrigerator[prop];
        }
    });
    resultDiv.innerHTML = "";
    resultDiv.appendChild(table);
}