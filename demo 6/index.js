
var arrBirthdayCard = [];

arrBirthdayCard[0] = {
    Name:"Dmytro",
    Data:"20.02.2004",
    Phone:"+380662432707"
}

arrBirthdayCard[1] = {
    Name:"Anastasia",
    Data:"28.11.2004",
    Phone:"+380958201560"
}

arrBirthdayCard[2] = {
    Name:"Oleksandr",
    Data:"20.10.2003",
    Phone:"+380665508001"
}

arrBirthdayCard[3] = {
    Name:"Anna",
    Data:"29.11.2004",
    /*Phone:"+380553800995"*/
}


var html = "";
var isPartying = 0;


function output(item, i, array) {

    var currentDate = new Date();

    var text = item['Data'];

    var notification = "";

    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    if (currentDate.getMonth() == date1.getMonth()) {
        if (currentDate.getDate() == date1.getDate()) {
            notification = "День Народження у " + item['Name'] + " сьогодні!<br>";
            if (!item['Phone']){
                notification = notification + "але номер телефону відсутній(";
            }
            else{
                notification = notification + item['Phone'];
            }
        }
        else if ((date1.getDate() - currentDate.getDate()) <= 3) {
            notification = "День Народження у " + item['Name'] + " за "
                + (date1.getDate() - currentDate.getDate()) + " дні, відправ привітання";
        }
    }
    html = html + "<td>" + notification + "</td>";
    html = html + "</tr>";
}

function result1() {
    html = "<table style = 'table'>";
    html = html + "<tr><td>Кого не забути привітати?</td><tr>" 
    arrBirthdayCard.forEach(output);
    html = html + "</table>";
    document.getElementById('rezult').innerHTML = html;
}