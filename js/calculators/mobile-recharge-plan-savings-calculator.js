export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Savings = Old Plan − New Plan</h3>

    <label>Old Plan Cost (₹)</label>
    <input id="old" value="799">

    <label>New Plan Cost (₹)</label>
    <input id="newp" value="599">

    <button onclick="calcSave()">Calculate</button>
    <p id="saveResult"></p>
  `;

  window.calcSave = function () {
    saveResult.innerHTML =
      `<b>You Save:</b> ₹${old.value - newp.value}`;
  };

  return div;
}
