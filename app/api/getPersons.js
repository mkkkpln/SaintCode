export const personsData = await getPersons();

async function getPersons() {
  const res = await fetch(
    "https://hp-api.onrender.com/api/characters/students"
  );
  return res.json();
}

export default getPersons
