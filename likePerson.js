export let likedNames = JSON.parse(localStorage.getItem("liked")) ?? [];

export function likePerson(name) {
  likedNames.push(name);
  localStorage.setItem("liked", JSON.stringify(likedNames));
}

export function dislikePerson(name) {
  likedNames = likedNames.filter((person) => person !== name);
  localStorage.setItem("liked", JSON.stringify(likedNames));
}
