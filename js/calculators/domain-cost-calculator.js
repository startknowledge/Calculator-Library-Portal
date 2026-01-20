export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Domain Cost Calculator</h3>

    <label>Annual Domain Cost (₹)</label>
    <input type="number" id="domainCost" value="900">

    <label>Number of Years</label>
    <input type="number" id="domainYears" value="3">

    <button onclick="calcDomain()">Calculate</button>
    <p id="domainResult"></p>
  `;

  window.calcDomain = function () {
    let cost = +document.getElementById("domainCost").value;
    let years = +document.getElementById("domainYears").value;

    let total = cost * years;

    document.getElementById("domainResult").innerHTML =
      `<b>Total Domain Cost:</b> ₹${total}`;
  };

  return div;
}
