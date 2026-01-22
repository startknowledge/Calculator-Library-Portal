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
    <br>
    <p><u>Explanation about Domain Cost Calculator</u> :</p>
    <p>The Domain Cost Calculator is a practical tool designed to help individuals and businesses estimate the total cost of registering and maintaining a domain name over a specified period. By inputting the annual cost of the domain and the number of years for which the domain will be registered, users can quickly calculate the overall expense associated with their online presence.</p>
    <p>To use the calculator, simply enter the annual cost of the domain in Indian Rupees (₹) and the desired number of years for registration. Upon clicking the "Calculate" button, the calculator will compute the total cost by multiplying the annual fee by the number of years.</p>
    <p>This tool is especially useful for website owners, entrepreneurs, and digital marketers who need to budget for domain expenses as part of their overall online strategy. By providing a clear understanding of domain costs, the Domain Cost Calculator enables users to make informed decisions about their web presence and financial planning.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice.</p>
    <br>
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
