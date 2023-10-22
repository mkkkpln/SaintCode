import renderPersons from "./renderPersons.js";
import { personsData } from "./api/getPersons.js";
import { likedNames } from "./likePerson.js";

const grid = document.querySelector(".grid");

const likedCards = personsData.filter((person) =>
  likedNames.includes(person.name)
);


renderPersons(likedCards, grid);