
grouping = new Array();

//clouds

async function populate(){
    const requestURL = "https://api.jsonbin.io/v3/b/6552840554105e766fcf941c";
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok){
        const ani = await response.json();
        newGroup(ani.record);
        showHeader();
        showProgram();
    }
    else{
        alert("Error");
    }
}
//create array of obj
function newGroup(obj){
    let ani=obj;
    for (a of ani){
        let grou=new program (a.name,a.group);
        grouping.push(grou);
    }
}

function showHeader(){
    const header = document.querySelector("header");
    const myH2 = document.createElement("h2");
    myH2.innerText="Список груп та освітніх програм";
    header.appendChild(myH2);
}

function showProgram(){
    const main = document.querySelector('article');
    const divKN = document.createElement('div');
    const divAND = document.createElement('div');
    const divPP = document.createElement('div');
    const myH3KN = document.createElement('h3');
    const myH3AND = document.createElement('h3');
    const myH3PP = document.createElement('h3');
    myH3KN.textContent = "Компютерні науки";
    myH3AND.textContent = "Аналітика даних";
    myH3PP.textContent = "Прикладне програмування";
    const myListKN=document.createElement('ul');
    const myListAND=document.createElement('ul');
    const myListPP=document.createElement('ul');
    for(a of grouping){
        const listItem = document.createElement('li');
        listItem.textContent = a.group;
        if(a.name=="Компютерні науки"){
            myListKN.append(listItem);
        } else if (a.name =="Аналітика даних"){
            myListAND.append(listItem);
        }
        else{
            myListPP.append(listItem);
        }
    }

    divKN.appendChild(myH3KN);
    divAND.appendChild(myH3AND);
    divPP.appendChild(myH3PP);
    divKN.appendChild(myListKN);
    divAND.appendChild(myListAND);
    divPP.appendChild(myListPP);
    main.appendChild(divKN);
    main.appendChild(divPP);
    main.appendChild(divAND);
}

populate();