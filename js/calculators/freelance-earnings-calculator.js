export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Freelance Earnings Calculator</h3>

    <label>Hourly Rate (₹)</label>
    <input id="rate" value="500">

    <label>Hours per Day</label>
    <input id="hours" value="6">

    <label>Working Days per Month</label>
    <input id="days" value="22">

    <button onclick="calcFreelance()">Calculate</button>
    <p id="freeResult"></p>
    <br>
    <p>The Freelance Earnings Calculator helps you estimate your monthly earnings based on your hourly rate, the number of hours you work per day, and the number of working days in a month. Simply enter your hourly rate in rupees, hours per day, and working days per month, then click "Calculate" to see your estimated monthly income.</p>  
    <p>This calculator is useful for freelancers, contractors, and gig workers who want to quickly assess their potential earnings. It allows for easy adjustments to your rate and working schedule to see how changes impact your monthly income.</p>
    <p><b>Note:</b> Ensure that the inputs are accurate to get a reliable estimate.</p>
    <p><b>Example:</b> For an hourly rate of ₹500, working 6 hours a day for 22 days a month, the estimated monthly earnings would be ₹66,000.</p>
    <p><b>Formula:</b> Monthly Earnings (₹) = Hourly Rate (₹) × Hours per Day × Working Days per Month</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual earnings may vary based on additional factors such as taxes, expenses, and fluctuations in work availability.</p>
    <br>
  `;

  window.calcFreelance = function () {
    let rate = +document.getElementById("rate").value;
    let hours = +document.getElementById("hours").value;
    let days = +document.getElementById("days").value;

    let income = rate * hours * days;

    freeResult.innerHTML =
      `<b>Monthly Earnings:</b> ₹${income}`;
  };

  return div;
}
