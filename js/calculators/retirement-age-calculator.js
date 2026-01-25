export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Retirement Date Calculator</h3>

    <p>
      This calculator helps you determine the expected retirement date based on your date of birth and desired retirement age.
    </p>

    <label>Date of Birth:</label>
    <input type="date" id="retDob">

    <label>Retirement Age (Years):</label>
    <input type="number" id="retAge" value="60">

    <button onclick="calcRetirement()">Calculate</button>
    <p id="retResult"></p>

    <hr>

    <h4>Formula</h4>
    <p>
      <b>Retirement Date</b> = Date of Birth + Retirement Age (Years)
    </p>

    <h4>How to Use</h4>
    <p>
      1. Enter your date of birth.<br>
      2. Enter your expected retirement age.<br>
      3. Click "Calculate" to see your retirement date.
    </p>

    <h4>Example</h4>
    <p>
      Date of Birth: 15-Jan-1990<br>
      Retirement Age: 60 years<br>
      <b>Retirement Date:</b> 15-Jan-2050
    </p>

    <h4>Note</h4>
    <p>
      This calculator assumes retirement occurs on the birthday of the retirement age.
      Adjustments for early or late retirement are not included.
    </p>

    <h4>Disclaimer</h4>
    <p>
      Results are approximate. Financial planning should consider other factors such as policies, taxes, and personal circumstances.
    </p>
  `;

  window.calcRetirement = function () {
    let dobInput = document.getElementById("retDob").value;
    let age = Number(document.getElementById("retAge").value);

    if (!dobInput || isNaN(age) || age <= 0) {
      document.getElementById("retResult").innerHTML = "<b>Please enter valid values!</b>";
      return;
    }

    let dob = new Date(dobInput);

    let retirementDate = new Date(
      dob.getFullYear() + age,
      dob.getMonth(),
      dob.getDate()
    );

    document.getElementById("retResult").innerHTML =
      `<b>Retirement Date:</b> ${retirementDate.toDateString()}`;
  };

  return div;
}
