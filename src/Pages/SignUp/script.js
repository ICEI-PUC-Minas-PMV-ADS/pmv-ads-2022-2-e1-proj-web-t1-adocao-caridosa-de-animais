const promiseCities = fetch("./Cities.json").then((res) => res.json());
const promiseStates = fetch("./States.json").then((res) => res.json());
const first = document.querySelector("#first");
const second = document.querySelector("#second");

function step() {
  first.classList.toggle("hidden");
  second.classList.toggle("hidden");
}

async function addStates() {
  const states = await promiseStates;

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
