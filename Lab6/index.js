var result=""
let birthdays = []

birthdays[0]={
    Name:"Dmytro",
    Date:"20.02.2004",
    Phone:"+380662432707"
};

birthdays[1]={
    Name:"Anastasia",
    Date:"24.08.2004",
    Phone:"+380958201560"
};

birthdays[2]={
    Name:"Alina",
    Date:"10.03.2004",
    Phone:"+380999422844"
};

birthdays[3]={
    Name:"Oleksandr",
    Date:"20.10.2003",
    Phone:"+380665508001"
};

birthdays[4]={
    Name:"Anna",
    Date:"28.10.2004",
    Phone:"+380553800995"
};


let currentDate = new Date();

function shouldSendCard(birthdayDate) {
    let threeDaysBefore = new Date(birthdayDate);
    threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);

    return currentDate >= threeDaysBefore && currentDate < birthdayDate;

}

function shouldCall(birthdayDate) {
    return currentDate.getDate() === birthdayDate.getDate() && currentDate.getMonth() === birthdayDate.getMonth();
}

for (let i = 0; i < birthdays.length; i++) {
    let birthdayDate = new Date(birthdays[i].Date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3'));
    
    if (shouldSendCard(birthdayDate)) {
        result += `Потрібно відправити вітальну листівку ${birthdays[i].Name}<br>`;
    }
    
    if (shouldCall(birthdayDate)) {
        result += `Потрібно поздоровити особисто по телефону ${birthdays[i].Name}<br>`;
    }

    if (!birthdays[i].Phone) {
        result += `Увага! Не вказано номер телефону для ${birthdays[i].Name}<br>`;
    }
}

document.getElementById('demo').innerHTML=result;