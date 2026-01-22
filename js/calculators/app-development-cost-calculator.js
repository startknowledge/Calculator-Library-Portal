export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>App Development Cost Calculator</h3>

    <label>Developer Cost per Month (₹)</label>
    <input type="number" id="dev" value="60000">

    <label>Project Duration (Months)</label>
    <input type="number" id="dur" value="6">

    <button onclick="calcApp()">Calculate</button>
    <p id="appResult"></p><br>
    <p><u>Explanation about App Development Cost Calculation</u> :</p>
    <p>App development cost calculation is the process of estimating the total expenses involved in creating a mobile or web application. This calculation takes into account various factors such as developer salaries, project duration, technology stack, design complexity, and additional resources required for successful app development.</p>
    <p>To calculate the app development cost, one of the primary components is the developer cost per month. This includes the salaries or hourly rates of developers, designers, testers, and other team members involved in the project. The project duration, typically measured in months, also plays a crucial role in determining the overall cost.</p>
    <p>The formula for calculating the total app development cost can be expressed as:</p>
    <p><b>Total Cost = Developer Cost per Month × Project Duration (in Months)</b></p>
    <p>For example, if the developer cost per month is ₹60,000 and the project duration is 6 months, the total app development cost
    would be ₹60,000 × 6 = ₹360,000.</p>
    <p>It is important to note that additional costs may arise from factors such as third-party services, marketing, maintenance, and updates post-launch. Therefore, while the basic calculation provides a foundational estimate, a comprehensive budget should consider all potential expenses associated with app development.</p>
    <p>For more detailed information, please refer to project management resources or consult with app development professionals.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of app development cost calculation. For specific details, please consult official resources or professionals in relevant fields.</p>
    <br>

  `;

  window.calcApp = function () {
    let dev = +document.getElementById("dev").value;
    let dur = +document.getElementById("dur").value;

    let total = dev * dur;

    document.getElementById("appResult").innerHTML =
      `<b>Total App Development Cost:</b> ₹${total.toLocaleString()}`;
  };

  return div;
}
