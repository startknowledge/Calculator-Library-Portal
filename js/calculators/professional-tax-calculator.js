export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Professional Tax Calculator</h3>

    <label>Monthly Salary (₹)</label>
    <input type="number" id="ptSalary">

    <button onclick="calcPT()">Calculate</button>
    <p id="ptResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator determines the professional tax payable based on your monthly salary.</p>

    <h4>Formula:</h4>
    <p>Professional Tax = ₹200 if Salary > ₹15,000, otherwise ₹0</p>

    <h4>How to Use:</h4>
    <p>Enter your monthly salary and click "Calculate" to see the professional tax applicable.</p>

    <h4>Note:</h4>
    <p>Professional tax rules may vary by state or country. This is a general estimate.</p>

    <h4>Disclaimer:</h4>
    <p>This calculator is for informational purposes only and may not reflect exact government regulations.</p>
  `;

  window.calcPT = function () {
    const salary = parseFloat(document.getElementById("ptSalary").value);
    if (isNaN(salary) || salary < 0) {
      ptResult.innerHTML = "Please enter a valid salary!";
      return;
    }

    const tax = salary > 15000 ? 200 : 0;

    ptResult.innerHTML = `<b>Professional Tax:</b> ₹${tax}`;
  };

  return div;
}
