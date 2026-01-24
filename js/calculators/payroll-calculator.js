export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Payroll Calculator</h3>
    <p>Calculate the total monthly payroll expense based on the salary per employee and the number of employees.</p>

    <label>Salary per Employee (₹)</label>
    <input id="sal" value="25000">

    <label>Number of Employees</label>
    <input id="emp" value="20">

    <button onclick="calcPayroll()">Calculate</button>
    <p id="payResult"></p>

    <p><b>Explanation:</b><br>
    This calculator multiplies the monthly salary of an employee by the total number of employees to get the total payroll cost.</p>

    <p><b>Formula:</b><br>
    Total Payroll = Salary per Employee × Number of Employees</p>

    <p><b>Example:</b><br>
    Salary per Employee = ₹25,000, Employees = 20 → Total Payroll = 25,000 × 20 = <b>₹500,000</b></p>

    <p><b>Disclaimer:</b><br>
    This calculator provides an estimate for planning purposes only. Actual payroll may include taxes, bonuses, and other allowances.<br></p>
  `;

  window.calcPayroll = function () {
    const salVal = parseFloat(document.getElementById("sal").value);
    const empVal = parseInt(document.getElementById("emp").value);

    if (isNaN(salVal) || isNaN(empVal) || salVal < 0 || empVal < 0) {
      payResult.innerHTML = "Please enter valid positive numbers.";
      return;
    }

    const total = salVal * empVal;

    payResult.innerHTML = `<b>Total Monthly Payroll:</b> ₹${total.toLocaleString()}`;
  };

  return div;
}
