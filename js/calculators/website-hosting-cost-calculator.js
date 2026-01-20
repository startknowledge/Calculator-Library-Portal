export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Website Hosting Cost Calculator</h3>

    <label>Monthly Hosting Cost (₹)</label>
    <input id="host" value="300">

    <label>Number of Months</label>
    <input id="months" value="12">

    <button onclick="calcHost()">Calculate</button>
    <p id="hostResult"></p>
  `;

  window.calcHost = function () {
    let host = +document.getElementById("host").value;
    let months = +document.getElementById("months").value;

    document.getElementById("hostResult").innerHTML =
      `<b>Total Hosting Cost:</b> ₹${host * months}`;
  };

  return div;
}
