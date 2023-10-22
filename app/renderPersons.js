import createPerson from "./createPerson.js";
import { likedNames } from "./likePerson.js";

function renderPersons(data, gridElement) {
  console.log("re-render");

  gridElement.innerHTML = "";
  data.forEach((person) => {
    const personCard = createPerson(person, likedNames.includes(person.name), data);
    gridElement.appendChild(personCard);
  });
}

export default renderPersons;
