const promiseCities = fetch(
    "http://127.0.0.1:5555/src/Commun/Scripts/Cities.json"
  ).then((res) => res.json());

const accordeonCities = document.querySelector(".accordion-cities");

async function addCities() {
    const cities = await promiseCities;
  
    accordeonCities.innerHTML += `
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Cidades
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          ${cities
            .map((e) => {
              return `<div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              ${e.Nome}
            </label>
          </div>`;
            })
            .reduce((previous, current) => previous + current, "")}
          </div>
        </div>
      </div>
      `;
  }

addCities();