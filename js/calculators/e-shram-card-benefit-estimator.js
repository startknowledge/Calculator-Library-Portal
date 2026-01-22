export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Worker Age</label>
    <input type="number" id="age">

    <button onclick="calcEShram()">Calculate</button>
    <p id="eshramResult"></p>
    <br>
    <p><u>Explanation about E-Shram Card Benefit Estimator</u> :</p>
    <p>The E-Shram Card Benefit Estimator is a user-friendly tool designed to help individuals assess their eligibility for benefits under the E-Shram Card scheme, which aims to provide social security and welfare support to unorganized sector workers in India. By inputting their age, users can quickly determine whether they qualify for the insurance benefits offered by the scheme.</p>
    <p>The E-Shram Card program is targeted at workers aged between 18 and 60 years, providing them with a ₹2 Lakh insurance cover to enhance their financial security. This estimator simplifies the process of checking eligibility by allowing users to enter their age and receive instant feedback on their qualification status.</p>
    <p>To use the estimator, simply enter your age in the provided input field. Upon clicking the "Calculate" button, the tool will evaluate your eligibility based on the age criteria set by the E-Shram Card program. If you fall within the eligible age range of 18 to 60 years, the estimator will confirm your qualification for a ₹2 Lakh insurance benefit.</p>
    <p>This tool is particularly useful for workers in the unorganized sector who wish to understand their entitlements under the E-Shram Card scheme. By providing a quick and easy way to check eligibility, the E-Shram Card Benefit Estimator empowers users to make informed decisions about applying for the card and accessing the associated benefits.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for official eligibility verification or application processes.</p>
    <br>
  `;

  window.calcEShram = function () {
    let age = parseFloat(document.getElementById("age").value);

    let benefit = age >= 18 && age <= 60 ? "₹2 Lakh Insurance" : "Not Eligible";

    document.getElementById("eshramResult").innerHTML =
      `<b>Benefit:</b> ${benefit}`;
  };

  return div;
}

