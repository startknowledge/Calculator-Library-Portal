export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Payroll Calculator (Salary × Employees)</h3>

    <label>Salary per Employee (₹)</label>
    <input id="sal" value="25000">

    <label>Number of Employees</label>
    <input id="emp" value="20">

    <button onclick="calcPayroll()">Calculate</button>
    <p id="payResult"></p>
  `;

  window.calcPayroll = function () {
    let sal = +sal.value;
    let emp = +emp.value;

    let total = sal * emp;

    payResult.innerHTML =
      `<b>Total Monthly Payroll:</b> ₹${total}`;
  };

  return div;
}
