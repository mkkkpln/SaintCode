import renderPersons from "./renderPersons.js";
import { personsData } from "./api/getPersons.js";

const grid = document.querySelector(".grid");
const input = document.querySelector(".input");
const select = document.querySelector(".select");

function inputHandler(evt) {
  const inputValue = evt.target.value.toLowerCase().trim();
  const selectValue = select.value.toLowerCase().trim();

  let filteredData = personsData;

  if (selectValue !== "") {
    filteredData = filteredData.filter((person) =>
      person.house.toLowerCase().trim().includes(selectValue)
    );
  }

  filteredData = filteredData.filter((person) =>
    person.name.toLowerCase().trim().includes(inputValue)
  );

  renderPersons(filteredData, grid);
}

function selectHandler(evt) {
  const selectValue = evt.target.value.toLowerCase().trim();
  const inputValue = input.value.toLowerCase().trim();

  let filteredData = personsData;

  if (inputValue !== "") {
    filteredData = filteredData.filter((person) =>
      person.name.toLowerCase().trim().includes(inputValue)
    );
  }

  filteredData = filteredData.filter((person) =>
    person.house.toLowerCase().trim().includes(selectValue)
  );

  renderPersons(filteredData, grid);
}

input.addEventListener("input", inputHandler);
select.addEventListener("change", selectHandler);

renderPersons(personsData, grid);
