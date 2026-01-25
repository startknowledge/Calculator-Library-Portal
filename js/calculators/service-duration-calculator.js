export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Service Duration Calculator</h3>
      <p>Calculate the total duration of service based on the joining date and the current date.</p>

      <label>Joining Date:</label>
      <input type="date" id="joinDate">

      <button onclick="calcService()">Calculate</button>
      <p id="serviceResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator computes the total service duration in years, months, and days.</p>
      <p><b>For example:</b> If joining date is 01-Jan-2015 and today is 25-Jan-2026, the service duration is 11 Years, 0 Months, 24 Days.</p>
      <p><b>Formula:</b> 
        <br>Years = Current Year − Joining Year
        <br>Months = Current Month − Joining Month
        <br>Days = Current Day − Joining Day
        <br>(Adjust months and days if negative)</p>
      <p>Calculator is a tool to help employees and HR departments track work duration.</p>
      <p>Relative accuracy depends on correct input of joining date.</p>
      <p>Based on standard calendar calculations.</p>
      <p>To use the calculator, select the joining date and click "Calculate".</p>
      <p><b>Note:</b> Leap years and different month lengths are approximated; days are considered as 30 per month for simplicity.</p>
      <p>It is important to input a valid joining date.</p>
      <p><b>Disclaimer:</b> This calculator is for general estimation purposes only and may not reflect exact HR or legal requirements.</p>
      <br>
    </div>
  `;

  window.calcService = function () {
    const join = new Date(document.getElementById("joinDate").value);
    const today = new Date();

    if (!join || isNaN(join)) {
      document.getElementById("serviceResult").innerHTML = "<b>Please enter a valid joining date</b>";
      return;
    }

    let years = today.getFullYear() - join.getFullYear();
    let months = today.getMonth() - join.getMonth();
    let days = today.getDate() - join.getDate();

    if (days < 0) { months--; days += 30; }
    if (months < 0) { years--; months += 12; }

    document.getElementById("serviceResult").innerHTML =
      `<b>Service Duration:</b> ${years} Years, ${months} Months, ${days} Days`;
  };

  return div;
}
