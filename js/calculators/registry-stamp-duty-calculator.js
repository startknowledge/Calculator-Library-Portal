export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Stamp Duty Calculator</h3>

    <p>
      This Stamp Duty Calculator helps you estimate the stamp duty payable
      during property registration based on the property value and applicable
      stamp duty rate.
    </p>

    <label>Property Value (₹)</label>
    <input id="price" type="number" value="5000000" placeholder="Enter property value">

    <label>Stamp Duty Rate (%)</label>
    <input id="rate" type="number" value="6" placeholder="Enter duty rate">

    <button onclick="calcStamp()">Calculate</button>
    <p id="stampResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      Stamp duty is a legal tax imposed by state governments on property
      transactions. It is mandatory to pay stamp duty to legally register
      a property in India.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Stamp Duty = Property Value × Stamp Duty Rate</b>
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the market value of the property.<br>
      2. Enter the applicable stamp duty rate (varies by state).<br>
      3. Click on the Calculate button to get the stamp duty amount.
    </p>

    <h4>Example</h4>
    <p>
      Property Value = ₹50,00,000<br>
      Stamp Duty Rate = 6%<br>
      <b>Stamp Duty = ₹3,00,000</b>
    </p>

    <h4>Note</h4>
    <p>
      Stamp duty rates differ across states and may vary based on property type,
      location, buyer category (male/female), and other factors.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an approximate stamp duty amount for reference only.
      Actual charges may vary as per state government rules and registration authority.
    </p>
  `;

  window.calcStamp = function () {
    let price = parseFloat(document.getElementById("price").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;

    if (isNaN(price) || isNaN(rate)) {
      document.getElementById("stampResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let duty = price * rate;

    document.getElementById("stampResult").innerHTML =
      `<b>Stamp Duty:</b> ₹${duty.toFixed(0)}`;
  };

  return div;
}
