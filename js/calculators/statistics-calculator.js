export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Mean (Average) Calculator</h3>
      <p>Calculate the arithmetic mean of a set of numbers.</p>

      <label>Numbers (comma separated)</label>
      <input type="text" id="statNums" placeholder="e.g. 5,10,15,20">

      <button id="meanBtn">Calculate</button>
      <p id="statResult"></p>
      <br>

      <p><b>Explanation:</b> The mean is the sum of all numbers divided by the count of numbers.</p>
      <p><b>For example:</b> For numbers 5, 10, 15, the mean is (5 + 10 + 15)/3 = 10.</p>
      <p><b>Formula:</b> Mean = (Σ Numbers) / Count of Numbers</p>
      <p>Calculator is a tool to quickly compute the mean of any dataset.</p>
      <p>Relative accuracy depends on correct input and proper formatting (comma separated numbers).</p>
      <p>To use the calculator, enter your numbers separated by commas and click "Calculate".</p>
      <p><b>Note:</b> Ensure all values are numeric. Empty or non-numeric values will affect accuracy.</p>
      <p><b>Disclaimer:</b> This calculator is for educational and reference purposes only.</p>
      <br>
    </div>
  `;

  div.querySelector("#meanBtn").onclick = () => {
    const input = document.getElementById("statNums").value.trim();
    if (!input) {
      statResult.innerHTML = "❌ Please enter some numbers";
      return;
    }

    const nums = input.split(",").map(Number);
    if (nums.some(isNaN)) {
      statResult.innerHTML = "❌ Invalid input detected. Only numbers separated by commas are allowed.";
      return;
    }

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    statResult.innerHTML = `<b>Mean:</b> ${mean.toFixed(2)}`;
  };

  return div;
}
