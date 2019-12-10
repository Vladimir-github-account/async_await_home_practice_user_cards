"use strict";

async function createUserCards() {
    try {
        const response = await fetch("./users.json");
        const users = await response.json();
        console.log(users);
        const usersContainer = document.getElementById("usersContainer");
        users.forEach(elem =>{
            console.log(elem);
            usersContainer.appendChild(createUserCardElem(elem));
            }
        );
        return usersContainer;
    } catch (e) {
        console.error(e);
    }
}

function createUserCardElem(user){
    const userCard = document.createElement("div");
    userCard.classList.add("userCard");
    userCard.appendChild(createUserFullNameElem(user));
    userCard.appendChild(createUserContactsLinkContainerElem(user));
    return userCard;
}

function createUserFullNameElem(user) {
    const userFullName = document.createElement("h3");
    userFullName.classList.add("userFullName");
    userFullName.innerText = user.name + " " +  user.surname;
    return userFullName;
}

function createUserContactsLinkContainerElem(user) {
    const userContactsLinkContainer = document.createElement("div");
    userContactsLinkContainer.classList.add("userContactsLinkContainer");
    if(user.contacts[0]) {
        userContactsLinkContainer.appendChild(createContactLinkElem(user))
    }
    return userContactsLinkContainer;
}

function createContactLinkElem(user){
    const contactLink = document.createElement("a");
    contactLink.setAttribute(
        "href",
        `${user.contacts[0]}`
    );
    contactLink.appendChild(createContactLinkImageIcon(user));
    return contactLink;
}

function createContactLinkImageIcon(user){
    const contactLinkImageIcon =  document.createElement("img");
    contactLinkImageIcon.setAttribute(
        "src",
        `https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png`
    );
    return contactLinkImageIcon;
}

console.log("before function");

createUserCards();

console.log("after function"); //will processed before function