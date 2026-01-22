export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Capital Appreciation Calculator</h3>

    <label>Initial Property Value (₹)</label>
    <input type="number" id="initial" value="2000000">

    <label>Annual Appreciation Rate (%)</label>
    <input type="number" id="rate" value="8">

    <label>Investment Period (Years)</label>
    <input type="number" id="years" value="10">

    <button onclick="calcCapital()">Calculate</button>

    <p id="capResult"></p><br>
    <p><u>Explanation about Capital Appreciation Calculation</u> :</p>
    <p>Capital appreciation refers to the increase in the value of an asset over time. In real estate, this means that the property's market value rises due to factors such as location development, market demand, and economic conditions. Calculating capital appreciation helps investors understand the potential growth of their investments.</p>
    <p>The formula to calculate the future value of an investment based on capital appreciation is:</p>
    <p>Future Value = Initial Value × (1 + Appreciation Rate) ^ Number of Years</p>
    <p>For example, if you invest in a property worth ₹2,000,000 with an annual appreciation rate of 8% over 10 years, the calculation would be as follows:</p>
    <p>Future Value = ₹2,000,000 × (1 + 0.08) ^ 10 ≈ ₹4,317,848</p>
    <p>This means that after 10 years, the property's value would be approximately ₹4,317,848, resulting in a capital gain of ₹2,317,848.</p>
    <br>
  `;

  window.calcCapital = function () {
    let initial =
      +document.getElementById("initial").value;

    let rate =
      +document.getElementById("rate").value / 100;

    let years =
      +document.getElementById("years").value;

    let finalValue =
      initial * Math.pow(1 + rate, years);

    let gain = finalValue - initial;

    document.getElementById("capResult").innerHTML = `
      <b>Final Property Value:</b> ₹${finalValue.toFixed(2)}<br>
      <b>Total Capital Gain:</b> ₹${gain.toFixed(2)}
    `;
  };

  return div;
}
