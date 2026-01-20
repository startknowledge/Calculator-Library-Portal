export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Rent (₹)</label>
    <input type="number" id="rent">

    <label>Number of Persons</label>
    <input type="number" id="persons">

    <button onclick="calcRent()">Calculate</button>
    <p id="rentResult"></p>
  `;

  window.calcRent = function () {
    let share = +rent.value / +persons.value;

    rentResult.innerHTML =
      `<b>Per Person Rent:</b> ₹${share.toFixed(2)}`;
  };

  return div;
}
