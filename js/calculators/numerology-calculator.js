export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter your name:</label>
    <input type="text" id="nameValue" placeholder="Enter full name">

    <button onclick="calculateNumerology()">Calculate</button>
    <p id="numerologyResult"></p>
    <br>
    <h3>Numerology Calculator</h3>
    <p>Calculate numerology number based on your name.</p>
    <p><b>Explanation:</b></p>
    <p>Each letter is assigned a number (A=1, B=2 ... Z=26).</p>
    <p>The total is reduced to a single digit.</p>
    <p><b>Formula:</b></p>
    <p>Numerology Number = Sum of letters → Reduce to 1 digit</p>
    <p><b>Example:</b>  
    Name = RAM → 18 → 1+8 = <b>9</b></p>
    <p><b>Disclaimer:</b> Numerology is belief-based, not scientific.</p>
    <br>
  `;

  window.calculateNumerology = function () {
    const name = document.getElementById("nameValue").value.toUpperCase();
    if (!name) return;

    let sum = 0;
    for (let char of name) {
      if (char >= "A" && char <= "Z") {
        sum += char.charCodeAt(0) - 64;
      }
    }

    while (sum > 9) {
      sum = sum
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }

    document.getElementById("numerologyResult").innerHTML =
      `<b>Numerology Number:</b> ${sum}`;
  };

  return div;
}
