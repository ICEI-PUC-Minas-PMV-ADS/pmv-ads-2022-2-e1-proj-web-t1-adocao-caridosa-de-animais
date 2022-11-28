const promiseCities = fetch("http://127.0.0.1:5555/src/Commun/Scripts/Cities.json").then((res) => res.json());
const promiseStates = fetch("http://127.0.0.1:5555/src/Commun/Scripts/States.json").then((res) => res.json());

async function addStates() {
  const states = await promiseStates;

  console.log(states);

  const selection = document.querySelector("#states");
  states.forEach(
    (s) =>
      (selection.innerHTML += `<option value="${s.Nome}">${s.Sigla}</option>`)
  );
}

addStates();

async function addCities() {
  const option = document.querySelector("#states").selectedIndex;
  const cities = await promiseCities;
  const allCitiesFromState = cities.filter((c) => c.Estado == option);

  const select = document.querySelector("#cities");
  select.innerHTML = "";
  allCitiesFromState.forEach(
    (acfs) =>
      (select.innerHTML += `<option value="${acfs.Nome}">${acfs.Nome}</option>`)
  );
}
