export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Height (cm)</label>
    <input id="idealHeight">

    <button onclick="calcIdeal()">Calculate</button>
    <p id="idealResult"></p>
  `;

  window.calcIdeal = function () {
    let ideal = idealHeight.value - 100;
    idealResult.innerHTML = `<b>Ideal Weight:</b> ${ideal} kg`;
  };

  return div;
}
