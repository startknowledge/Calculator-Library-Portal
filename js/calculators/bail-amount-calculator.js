export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Case Amount (₹)</label>
    <input type="number" id="caseAmount">

    <label>Bail Percentage (%)</label>
    <input type="number" id="bailPercent">

    <button onclick="calcBail()">Calculate</button>
    <p id="bailResult"></p><br>
    <p><u>Explanation about Bail Amount Calculation</u> :</p>
    <p>Bail is a sum of money that is paid to the court to secure the release of a person who has been arrested and is awaiting trial. The bail amount is typically determined by the court based on various factors, including the severity of the offense, the accused's criminal history, and the likelihood of them fleeing.</p>
    <p>The bail amount is usually a percentage of the case amount. For example, if a case has a value of ₹100,000 and the bail percentage is 10%, then the estimated bail amount would be ₹10,000.</p>
    <p>It's important to note that this calculation provides an estimate only and does not represent legal advice or official court decisions. The actual bail amount may vary depending on specific circumstances and judicial discretion.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of bail amount calculation. For specific legal advice, please consult a qualified legal professional or refer to official judicial resources.</p>
    <br>
  `;

  window.calcBail = function () {
    let amount = parseFloat(document.getElementById("caseAmount").value);
    let percent = parseFloat(document.getElementById("bailPercent").value);

    let bail = (amount * percent) / 100;

    document.getElementById("bailResult").innerHTML =
      `<b>Estimated Bail Amount:</b> ₹${bail.toFixed(2)}`;
  };

  return div;
}
