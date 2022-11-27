const promiseStates = fetch(
  "http://127.0.0.1:5555/src/Commun/Scripts/States.json"
).then((res) => res.json());

const accordeonStates = document.querySelector(".accordion-states");

async function addStates() {
  const states = await promiseStates;

  accordeonStates.innerHTML += `
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Estados
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        ${states
          .map((e) => {
            return `<div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            ${e.Sigla}
          </label>
        </div>`;
          })
          .reduce((previous, current) => previous + current, "")}
        </div>
      </div>
    </div>
    `;
}

addStates();