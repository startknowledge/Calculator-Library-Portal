export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Rent (₹)</label>
    <input type="number" id="rent">

    <label>Number of Persons</label>
    <input type="number" id="persons">

    <button onclick="calcRent()">Calculate</button>
    <p id="rentResult"></p>
    <br>
    <p>The House Rent Sharing Calculator helps you determine the amount of rent each person needs to pay when sharing a house. By entering the total rent and the number of persons sharing the rent, users can quickly calculate their individual share.</p>
    <p>This calculator is useful for roommates and housemates who want to fairly divide the rent among themselves. It provides a quick way to evaluate how much each person needs to contribute towards the total rent.</p>
    <p>Ensure that the total rent and number of persons inputs are accurate to get a reliable rent share estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the total rent amount in the "Total Rent" field and the number of persons sharing the rent in the "Number of Persons" field. Click the "Calculate" button to see the estimated rent share per person displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>    
      <li><b>Total Rent (₹):</b> The total amount of rent for the house.</li>
      <li><b>Number of Persons:</b> The number of people sharing the rent.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Per Person Rent (₹):</b> The estimated rent share for each person based on the provided inputs.</li>
    </ul>
    <p><b>Note:</b> Ensure that the total rent and number of persons inputs are accurate to get a reliable rent share estimate.</p>
    <p><b>Example:</b> For a total rent of ₹15,000 and 3 persons sharing the rent, each person would pay approximately ₹5,000.</p>
    <p><b>Formula:</b> Per Person Rent = Total Rent / Number of Persons</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual rent shares may vary based on additional factors such as utilities, maintenance costs, and individual agreements among housemates.</p>
    <br>

  `;
  window.calcRent = function () {
    let share = +rent.value / +persons.value;

    rentResult.innerHTML =
      `<b>Per Person Rent:</b> ₹${share.toFixed(2)}`;
  };

  return div;
}
