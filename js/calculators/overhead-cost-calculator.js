export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Overhead Cost Calculator (Monthly)</h3>
    <h4>Overhead = Rent + Electricity + Salaries + Other Costs</h4><br>

    <label>Rent (₹)</label>
    <input id="rent" value="20000">

    <label>Electricity (₹)</label>
    <input id="electricity" value="5000">

    <label>Salaries (₹)</label>
    <input id="salary" value="30000">

    <label>Other Expenses (₹)</label>
    <input id="other" value="5000">

    <button onclick="calcOverhead()">Calculate</button>
    <p id="overheadResult"></p>

    <p><b>Explanation:</b><br>
       This calculator helps determine the total monthly overhead cost for a business by summing all recurring expenses.</p>

    <p><b>Formula:</b><br>
       Total Overhead = Rent + Electricity + Salaries + Other Costs</p>

    <p><b>Example:</b><br>
       Rent = ₹20,000, Electricity = ₹5,000, Salaries = ₹30,000, Other Expenses = ₹5,000<br>
       Total Overhead = 20000 + 5000 + 30000 + 5000 = <b>₹60,000</b></p>

    <p><b>Disclaimer:</b><br>
       This calculator provides an estimate for planning purposes only. Actual costs may vary based on business specifics.<br></p>
  `;

  window.calcOverhead = function () {
    let rent = +document.getElementById("rent").value;
    let electricity = +document.getElementById("electricity").value;
    let salary = +document.getElementById("salary").value;
    let other = +document.getElementById("other").value;

    let total = rent + electricity + salary + other;

    document.getElementById("overheadResult").innerHTML =
      `<b>Total Overhead Cost:</b> ₹${total.toLocaleString()}`;
  };

  return div;
}
