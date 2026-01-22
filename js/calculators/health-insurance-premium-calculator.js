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
    <br>
    <p>The Health Insurance Premium Calculator helps you estimate the premium amount for health insurance based on your age and desired coverage amount. By entering these details, users can quickly calculate an estimated premium to help with budgeting and financial planning.</p>
    <p>This calculator is useful for individuals and families looking to purchase health insurance. It provides a quick way to understand potential costs associated with different coverage levels and age groups.</p>
    <p><b>Note:</b> Ensure that the age and coverage amount inputs are accurate to get a reliable premium estimate.</p>
    <p><b>Example:</b> For a 30-year-old individual seeking ₹5,00,000 coverage, the estimated premium might be ₹1,250.00.</p>
    <p><b>Formula:</b> Estimated Premium = (Coverage Amount / 1000) * (Age * 0.5)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual premium amounts may vary based on specific insurance providers, policy terms, health conditions, and other factors.</p>
    <br>
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
