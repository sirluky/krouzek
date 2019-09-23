const rozdelaneDOM = document.querySelector("#rozdelane");

document.querySelector("#rozdelane").onclick = ({target}) => {
  //   console.log(target.parentElement.parentElement    );
  if (target.id.indexOf("control-ukol-") === 0) {
    if (target.id.endsWith("-delete")) {
      document.querySelector("#" + target.id.slice(8, target.id.indexOf("-delete"))).remove();
    } else if (target.id.endsWith("-done")) {
      document.querySelector("#" + target.id.slice(8, target.id.indexOf("-done"))).style.background = "green";
    }
  }
};
document.querySelector("#pridejUkol").onclick = () => {
  const obsahukolu = document.querySelector("#ukol").value;
  pridatUkol(obsahukolu);
};

function pridatUkol(ukoltext) {
  const uid = "ukol-" + Math.floor(Math.random() * 1000000000);

  const id = "control-" + uid;
  rozdelaneDOM.innerHTML += `  <tr  id="${uid}">
    <th scope="row">
      <button class="btn btn-primary text-white" id="${id + "-done"}">
        <i class="fa fa-check" id="${id + "-done"}"></i>
      </button>
    </th>
    <td>${ukoltext}</td>
    <td>
      <button class="btn btn-danger text-white" id="${id + "-delete"}">
        <i class="fa fa-times-circle" id="${id + "-delete"}"></i>
      </button>
    </td>
  </tr>`;
}
