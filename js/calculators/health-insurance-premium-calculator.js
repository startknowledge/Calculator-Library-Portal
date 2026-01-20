export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Health Insurance Premium Calculator</h3>

    <div class="form-group">
      <label for="hiAge">Age</label>
      <input type="number" id="hiAge">
    </div>

    <div class="form-group">
      <label for="hiCover">Coverage Amount (₹)</label>
      <input type="number" id="hiCover">
    </div>

    <button onclick="calculateHealthUI()">Calculate</button>
    <p id="hiResult"></p>
  `;

  window.calculateHealthUI = function () {
    let age = document.getElementById("hiAge").value;
    let cover = document.getElementById("hiCover").value;

    let premium = (cover / 1000) * (age * 0.5);

    document.getElementById("hiResult").innerText =
      "Estimated Premium: ₹" + premium.toFixed(2);
  };

  return div;
}
