export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Exponent (Power) Calculator</h3>

    <p>
      This calculator finds the result of raising a number
      to a given power.
    </p>

    <label>Base Number</label>
    <input type="number" id="expoNum" placeholder="Enter base value">

    <label>Exponent (Power)</label>
    <input type="number" id="expoPow" placeholder="Enter exponent">

    <button onclick="calcExpo()">Calculate</button>

    <p id="expoResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>Result = Base<sup>Power</sup></p>

    <p><b>Example:</b></p>
    <p>
      2<sup>3</sup> = <b>8</b><br>
      5<sup>2</sup> = <b>25</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful in mathematics, science, engineering,
      finance growth models, and computer algorithms.
    </p>

    <p><b>Note:</b>
      Large exponents may result in very large numbers.
    </p>

    <p><b>Disclaimer:</b>
      Results may vary slightly due to floating-point precision.
    </p>
  `;

  window.calcExpo = function () {
    const num = parseFloat(document.getElementById("expoNum").value);
    const pow = parseFloat(document.getElementById("expoPow").value);

    if (isNaN(num) || isNaN(pow)) {
      document.getElementById("expoResult").innerHTML =
        "<b>Please enter valid numeric values.</b>";
      return;
    }

    const res = Math.pow(num, pow);

    document.getElementById("expoResult").innerHTML =
      `<b>Result:</b> ${res}`;
  };

  return div;
}
