export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Numerology Calculator</h3>
    <p>Calculate your numerology number based on your full name.</p>

    <label>Enter your name:</label>
    <input type="text" id="nameValue" placeholder="Enter full name"><br><br>

    <button onclick="calculateNumerology()">Calculate</button>
    <p id="numerologyResult"></p>
    <br>

    <p><b>Explanation:</b></p>
    <p>
      Each letter in your name is assigned a number (A=1, B=2, ..., Z=26). 
      The sum of all letters is calculated and reduced to a single digit by adding the digits repeatedly.
    </p>

    <p><b>Formula:</b><br>
      Numerology Number = Sum of letters → Reduce to 1 digit
    </p>

    <p><b>Example:</b><br>
      Name = RAM<br>
      R = 18, A = 1, M = 13<br>
      Sum = 18 + 1 + 13 = 32 → 3 + 2 = <b>5</b><br>
      <b>Numerology Number = 5</b>
    </p>

    <p><b>Use Case:</b><br>
      Fun and belief-based insight. Can be used for personal curiosity, entertainment, or online personality tools.
    </p>

    <p><b>Disclaimer:</b> Numerology is belief-based and not scientifically verified. Use it for entertainment purposes only.<br></p>
  `;

  window.calculateNumerology = function () {
    const name = document.getElementById("nameValue").value.toUpperCase().replace(/[^A-Z]/g, "");
    if (!name) {
      document.getElementById("numerologyResult").innerHTML = "<b>Please enter a valid name.</b>";
      return;
    }

    let sum = 0;
    for (let char of name) {
      sum += char.charCodeAt(0) - 64;
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
