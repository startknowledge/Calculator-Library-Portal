export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Logarithm Calculator (Base 10)</h3>

    <p>
      This calculator computes the base-10 logarithm (log₁₀)
      of a given positive number.
    </p>

    <label>Enter Number</label>
    <input type="number" id="num" min="0.0001" placeholder="Enter a positive number">

    <button onclick="calcLog()">Calculate</button>

    <p id="logResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>log₁₀(x) = y &nbsp;where&nbsp; 10ʸ = x</p>

    <p><b>Example:</b></p>
    <p>
      log₁₀(100) = <b>2</b><br>
      log₁₀(1000) = <b>3</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful in mathematics, science, engineering,
      finance, signal processing, and data analysis.
    </p>

    <p><b>Note:</b>
      Logarithms are defined only for positive numbers.
    </p>

    <p><b>Disclaimer:</b>
      Results may include minor rounding differences.
    </p>
  `;

  window.calcLog = function () {
    const num = parseFloat(document.getElementById("num").value);

    if (isNaN(num) || num <= 0) {
      document.getElementById("logResult").innerHTML =
        "<b>Please enter a positive number greater than 0.</b>";
      return;
    }

    const result = Math.log10(num);

    document.getElementById("logResult").innerHTML =
      `<b>log₁₀(${num}):</b> ${result.toFixed(4)}`;
  };

  return div;
}
