export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Monthly Recurring Revenue (MRR) Calculator</h3>

    <p>
      Calculate the Monthly Recurring Revenue (MRR) for your subscription-based business
      based on the number of subscribers and their average revenue per user (ARPU).
    </p>

    <form id="mrr-calculator-form">
      <label for="num-subscribers">Number of Subscribers:</label>
      <input type="number" id="num-subscribers" min="0" name="num-subscribers" required placeholder="e.g. 500"><br><br>

      <label for="arpu">Average Revenue Per User (ARPU) ($ / ₹):</label>
      <input type="number" id="arpu" min="0" name="arpu" required placeholder="e.g. 20"><br><br>

      <input type="submit" value="Calculate MRR">
    </form>

    <h3 id="calculated-mrr"></h3>
    <br>

    <p><b>Formula:</b><br>
      MRR = Number of Subscribers × ARPU
    </p>

    <p><b>Example:</b><br>
      Subscribers = 500<br>
      ARPU = ₹20<br>
      <b>MRR = ₹10,000</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for SaaS businesses, subscription services, and financial planning.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only.<br></p>
  `;

  div.querySelector("#mrr-calculator-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const numSubscribers = parseInt(div.querySelector("#num-subscribers").value);
    const arpu = parseFloat(div.querySelector("#arpu").value);

    if (isNaN(numSubscribers) || isNaN(arpu) || numSubscribers < 0 || arpu < 0) {
      div.querySelector("#calculated-mrr").textContent = "Please enter valid positive numbers.";
      return;
    }

    const calculatedMRR = numSubscribers * arpu;
    div.querySelector("#calculated-mrr").textContent = 
      `Monthly Recurring Revenue (MRR): ($ / ₹) ${calculatedMRR.toFixed(2)}`;
  });

  return div;
}
