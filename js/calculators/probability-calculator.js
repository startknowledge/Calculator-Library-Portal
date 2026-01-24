export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Probability Calculator</h3>

    <label>Favourable Outcomes</label>
    <input type="number" id="fav">

    <label>Total Outcomes</label>
    <input type="number" id="total">

    <button onclick="calcProb()">Calculate</button>
    <p id="probResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator determines the probability of an event occurring based on the number of favourable outcomes versus total possible outcomes.</p>

    <h4>Formula:</h4>
    <p>Probability (P) = Favourable Outcomes ÷ Total Outcomes</p>

    <h4>How to Use:</h4>
    <p>Enter the number of favourable outcomes and the total number of outcomes, then click "Calculate".</p>

    <h4>Note:</h4>
    <p>Probability values range from 0 (impossible) to 1 (certain). Decimal format is shown.</p>

    <h4>Disclaimer:</h4>
    <p>This calculator is for educational purposes only. Real-world probabilities may vary depending on context.</p>
  `;

  window.calcProb = function () {
    const favVal = parseFloat(document.getElementById("fav").value);
    const totalVal = parseFloat(document.getElementById("total").value);

    if (!favVal || !totalVal || totalVal === 0) {
      probResult.innerHTML = "Please enter valid numbers and ensure total outcomes is not zero!";
      return;
    }

    const p = favVal / totalVal;

    probResult.innerHTML = `<b>Probability:</b> ${p.toFixed(2)}`;
  };

  return div;
}
