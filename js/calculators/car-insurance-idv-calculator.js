export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Car Insurance Calculator IDV (Insured Declared Value) </h3>

    <label>Ex-Showroom Price (₹):</label>
    <input type="number" id="carPrice">

    <label>Car Age (Years):</label>
    <input type="number" id="carAge">

    <button onclick="calcIDV()">Calculate</button>

    <p id="idvResult"></p>

    <table border="1">
    <tr>
    <th>Car Age</th>
    <th>Depreciation</th>
    </tr>

    <tr>
      <td>&lt; 6 months</td>
      <td>5%</td>
    </tr>

    <tr>
      <td>6 months – 1 year</td>
      <td>15%</td>
    </tr>

    <tr>
      <td>1 – 2 years</td>
      <td>20%</td>
    </tr>

    <tr>
      <td>2 – 3 years</td>
      <td>30%</td>
    </tr>

    <tr>
      <td>3 – 4 years</td>
      <td>40%</td>
    </tr>

    <tr>
      <td>4 – 5 years</td>
      <td>50%</td>
    </tr></table><br>
    <p><u>Explanation about Car Insurance IDV (Insured Declared Value) Calculation</u> :</p>
    <p>The Insured Declared Value (IDV) of a car is the maximum sum assured that an insurance company will pay in case of theft or total loss of the vehicle. It is essentially the current market value of the car and is calculated by considering the ex-showroom price of the vehicle and applying depreciation based on its age.</p>
    <p>The formula to calculate IDV is:</p>
    <p>IDV = Ex-Showroom Price - Depreciation Amount</p>
    <p>Depreciation rates vary depending on the age of the vehicle. For example, a new car (less than 6 months old) typically has a depreciation rate of 5%, while a car that is 4-5 years old may have a depreciation rate of up to 50%.</p>
    <p>For instance, if a car has an ex-showroom price of ₹10,00,000 and is 3 years old, the depreciation would be 30%. Thus, the IDV would be calculated as follows:</p>
    <p>Depreciation Amount = ₹10,00,000 × 30% = ₹3,00,000</p>
    <p>IDV = ₹10,00,000 - ₹3,00,000 = ₹7,00,000</p>
    <p>This means the IDV of the car would be ₹7,00,000.</p>
    <br>


  `;

  window.calcIDV = function () {
    let price = parseFloat(document.getElementById("carPrice").value);
    let age = parseFloat(document.getElementById("carAge").value);

    let depreciation = 0;

    if (age <= 0.5) depreciation = 0.05;
    else if (age <= 1) depreciation = 0.15;
    else if (age <= 2) depreciation = 0.20;
    else if (age <= 3) depreciation = 0.30;
    else if (age <= 4) depreciation = 0.40;
    else depreciation = 0.50;

    let idv = price - (price * depreciation);

    document.getElementById("idvResult").innerHTML =
      `<b>IDV Amount:</b> ₹${idv.toFixed(2)}`;
  };

  return div;
}
