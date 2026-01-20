export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Professional Tax Calculator</h3>

    <label>Monthly Salary (₹)</label>
    <input type="number" id="ptSalary">

    <button onclick="calcPT()">Calculate</button>
    <p id="ptResult"></p>
  `;

  window.calcPT = function () {
    let salary = parseFloat(document.getElementById("ptSalary").value);
    let tax = salary > 15000 ? 200 : 0;

    document.getElementById("ptResult").innerHTML =
      `<b>Professional Tax:</b> ₹${tax}`;
  };

  return div;
}
