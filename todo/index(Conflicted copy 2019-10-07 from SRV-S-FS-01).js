let sekce = [];



document.querySelector("#pridejUkol").onclick = () => {
  const obsahukolu = document.querySelector("#ukol").value;
  pridatUkol(obsahukolu);
  ukolcounter();
  document.querySelector("#ukol").value = "";
};

function pridatUkol(ukoltext) {
  nazevSekce = "rozdelane";
  const uid = "ukol-" + Math.floor(Math.random() * 1000000000);

  const id = "control-" + uid;
  document.querySelector("#" + nazevSekce).innerHTML += `  <tr  id="${uid}">
    <th scope="row">
      <button class="btn btn-primary text-white" id="${id + "-done"}">
        <i class="fa fa-check" id="${id + "-done"}"></i>
      </button>
    </th>
    <td>${ukoltext}</td>
    <td>
    <button class="btn btn-secondary text-white" id="${id + "-edit"}">
       <i class="far fa-edit" id="${id + "-edit"}"></i>
    </button>

      <button class="btn btn-danger text-white" id="${id + "-delete"}">
       
        <i class="fa fa-times-circle" id="${id + "-delete"}"></i>
      </button>
    </td>
  </tr>`;
}

window.onload = function () {
  // rozdelaneDOM.innerHTML = this.localStorage.getItem("todohtml");
  ukolcounter();
};

function ukolcounterdone() {
  document.querySelector("#todocounter-done-rozdelane").innerHTML = document.querySelectorAll("#rozdelane tr[style]").length;
}

function ukolcounterAll() {
  document.querySelector("#todocounter-rozdelane").innerHTML = document.querySelectorAll("#rozdelane tr").length;
}

function ukolcounter() {
  ukolcounterAll();
  ukolcounterdone();
}

function vytvorSekci(nazevSekce) {
  document.querySelector("table").innerHTML += `
  <table class="table">
  <h2 class="pl-3 mt-2">${nazevSekce}</h2>
  <caption>Celkem úkolů:
    <span id="todocounter-${nazevSekce}"></span>
    <br>
    Celkem splněných:
    <span id="todocounter-done-${nazevSekce}"></span>

  </caption>
  <thead>
    <tr>
      <th scope="col">
        Splněn
      </th>
      <th scope="col">Úkol</th>
      <th scope="col">Ovládaci Tlačítka</th>
    </tr>
  </thead>
  <tbody id="${nazevSekce}">
    

  </tbody>
</table>`;
}

function detekujZmeny(nazevSekce) {
  nazevSekce = "#" + nazevSekce;
  document.querySelector(nazevSekce + "").onclick = ({target}) => {
    //   console.log(target.parentElement.parentElement    );
    if (target.id.indexOf("control-ukol-") === 0) {
      if (target.id.endsWith("-delete")) {
        document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-delete"))).remove();
      } else if (target.id.endsWith("-done")) {
        document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-done"))).style.background = "lightgreen";
      } else if (target.id.endsWith("-edit")) {
        const editing = document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-edit")));
        const content = editing.querySelector("td");

        if (!editing.querySelector("input")) {
          content.innerHTML = `<input type="text" value="${
          content.innerHTML}">`;
          console.log(editing);
          if (target.querySelector("i")) {
            target.querySelector("i").className = "fa fa-check";
          } else {
            target.className = "fa fa-check";
          }
        } else {
          if (target.querySelector("i")) {
            target.querySelector("i").className = "far fa-edit";
          } else {
            target.className = "far fa-edit";
          }
          content.innerHTML = content.querySelector("input").value;
        }
      }
    }
    // localStorage.setItem("todohtml", rozdelaneDOM.innerHTML);
    ukolcounter();
  };
}
detekujZmeny("rozdelane");
