export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Expense Ratio Calculator</h3>

    <label>Total Expenses (₹)</label>
    <input id="exp" value="30000">

    <label>Total Income (₹)</label>
    <input id="inc" value="100000">

    <button onclick="calcER()">Calculate</button>
    <p id="erResult"></p>
    <br>
    <p><u>Explanation about Expense Ratio Calculator</u> :</p>
    <p>The Expense Ratio Calculator is a tool designed to help individuals and businesses determine the proportion of their expenses relative to their income. By inputting total expenses and total income, users can quickly calculate the expense ratio, which is expressed as a percentage. This ratio is a key financial metric that provides insights into spending habits and financial health.</p>
    <p>The expense ratio is calculated using the formula: Expense Ratio = (Total Expenses / Total Income) * 100.</p>  
    <p>To use the calculator, simply enter the total expenses and total income in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the expense ratio.</p>
    <p>This calculator is particularly useful for individuals looking to manage personal finances, as well as businesses aiming to monitor operational costs. By understanding the expense ratio, users can make informed decisions about budgeting,  cost-cutting measures, and financial planning.</p>
    <p>In summary, the Expense Ratio Calculator is a valuable resource for anyone interested in assessing their financial efficiency, providing clarity on spending patterns and aiding in effective financial management.</p>  
    <p><b>Note:</b> This calculator provides an estimate of the expense ratio based on the inputs provided. Actual financial situations may vary depending on various factors such as unexpected expenses or income fluctuations.</p>
    <p>For personalized advice and detailed financial analysis, consider consulting with a financial advisor or accountant.</p>
    <p>Happy Calculating!</p> 
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified financial professional for critical financial decisions.</p>
    <br>
  `;

  window.calcER = function () {
    let exp = +document.getElementById("exp").value;
    let inc = +document.getElementById("inc").value;

    let ratio = (exp / inc) * 100;

    erResult.innerHTML =
      `<b>Expense Ratio:</b> ${ratio.toFixed(2)} %`;
  };

  return div;
}
