export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Cost = Hours × Hourly Rate</h3>

    <label>Total Hours</label>
    <input id="hours" value="120">

    <label>Rate per Hour (₹)</label>
    <input id="rate" value="800">

    <button onclick="calcProject()">Calculate</button>
    <p id="codeResult"></p>
    <br>
    <p><u>Explanation about Coding Project Cost Calculator</u> :</p>
    <p>The Coding Project Cost Calculator is a tool designed to help developers, project managers, and clients estimate the total cost of a coding project based on the number of hours required and the hourly rate charged by the developer or development team. This calculator is particularly useful for budgeting and financial planning in software development projects.</p>
    <p>To use the calculator, simply input the total number of hours estimated for the project and the hourly rate in Indian Rupees (₹). The calculator will then multiply these two values to provide you with the total project cost.</p>
    <p>This calculator is beneficial for both developers and clients, as it provides a transparent way to understand the financial implications of a coding project. It can help in negotiating contracts, setting expectations, and ensuring that both parties are aligned on the project's budget.</p>
    <p>Please note that this calculator provides a basic estimate and may not account for additional costs such as project management fees, software licenses, or other expenses that may arise during the development process. It is advisable to consider these factors when planning a coding project.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed project cost analysis.</p>
    <br>
  `;

  window.calcProject = function () {
    document.getElementById("codeResult").innerHTML =
      `<b>Total Project Cost:</b> ₹${document.getElementById("hours").value * document.getElementById("rate").value}`;
  };

  return div;
}
