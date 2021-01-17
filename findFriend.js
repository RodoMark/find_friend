"use strict";

// findFriend.js

// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"],
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"],
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"],
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"],
  },
];

const fetchFirstFriend = function (contacts, name) {
  for (const obj of contacts) {
    if (obj["name"] === name) {
      return obj["friends"][0];
    }
  }
};

const findFriend = function (contacts, name, property) {
  const details = {};

  details.name = fetchFirstFriend(contacts, name);

  for (const obj of contacts) {
    if (obj[property] && obj.name === details.name) {
      details[property] = obj[property];
      return details;
    }
  }

  return "Not found";
};

console.log(findFriend(contacts, "Laurel", "email"));
console.log(findFriend(contacts, "Buster", "phone"));
console.log(findFriend(contacts, "Abbott", "friends"));
