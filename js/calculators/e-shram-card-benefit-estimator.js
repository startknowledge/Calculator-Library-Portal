export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Worker Age</label>
    <input type="number" id="age">

    <button onclick="calcEShram()">Calculate</button>
    <p id="eshramResult"></p>
  `;

  window.calcEShram = function () {
    let age = parseFloat(document.getElementById("age").value);

    let benefit = age >= 18 && age <= 60 ? "₹2 Lakh Insurance" : "Not Eligible";

    document.getElementById("eshramResult").innerHTML =
      `<b>Benefit:</b> ${benefit}`;
  };

  return div;
}
