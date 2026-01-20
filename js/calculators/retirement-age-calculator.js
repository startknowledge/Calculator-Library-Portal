export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Date of Birth:</label>
    <input type="date" id="retDob">

    <label>Retirement Age (Years):</label>
    <input type="number" id="retAge" value="60">

    <button onclick="calcRetirement()">Calculate</button>
    <p id="retResult"></p>
  `;

  window.calcRetirement = function () {
    let dob = new Date(document.getElementById("retDob").value);
    let age = Number(document.getElementById("retAge").value);

    if (!dob) return;

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
