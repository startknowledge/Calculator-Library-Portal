export default function () {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>Monthly Recurring Revenue (MRR) Calculator</h3>
    <p>Calculate the Monthly Recurring Revenue (MRR) for your subscription-based business based on the number of subscribers and their average revenue per user (ARPU).</p>
    <form id="mrr-calculator-form">
      <label for="num-subscribers">Number of Subscribers:</label>
      <input type="number" id="num-subscribers" name="num-subscribers" required><br><br>
        <label for="arpu">Average Revenue Per User (ARPU) ($ / ₹):</label>
        <input type="number" id="arpu" name="arpu" required><br><br>
        <input type="submit" value="Calculate MRR">
    </form>
    <h3 id="calculated-mrr"></h3>
    `;
    div.querySelector("#mrr-calculator-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const numSubscribers = parseInt(div.querySelector("#num-subscribers").value);
      const arpu = parseFloat(div.querySelector("#arpu").value);
        const calculatedMRR = numSubscribers * arpu;
        div.querySelector("#calculated-mrr").textContent = `Monthly Recurring Revenue (MRR): ($ / ₹) ${calculatedMRR.toFixed(2)}`;    
    });
    return div;

}