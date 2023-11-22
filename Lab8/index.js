function addCountry(event) {
    if (event.key === "Enter") {
        var countryInput = document.getElementById("countryInput");
        var country = countryInput.value.trim();
        var countryList = document.getElementById("countryList");
        if (country !== "") {
            if (countryList.innerHTML !== "") {
                countryList.innerHTML += ", " + country;
            } else {
                countryList.innerHTML = country;
            }
            countryInput.value = "";
        }
    }
}


function highlightMaxCell() {
    var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tr');
    var maxCellValue = Number.NEGATIVE_INFINITY;
    var maxCell;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');

        for (var j = 0; j < cells.length; j++) {
            var cellValue = parseInt(cells[j].innerText);

            if (cellValue > maxCellValue) {
                maxCellValue = cellValue;
                maxCell = cells[j];
            }
        }
    }

    if (maxCell) {
        maxCell.style.backgroundColor = 'red';
    }
}
