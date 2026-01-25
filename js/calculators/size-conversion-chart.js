export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Size Conversion Chart</h3>
      <p>Determine the recommended garment size based on chest measurements in inches.</p>

      <label>Chest Size (Inches):</label>
      <input type="number" id="chest" placeholder="e.g. 40">

      <button id="sizeBtn">Check Size</button>
      <p id="sizeResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator helps convert chest measurements into standard garment sizes (S, M, L, XL).</p>
      <p><b>For example:</b> A chest measurement of 39 inches corresponds to size M.</p>
      <p><b>Formula:</b> 
        <ul>
          <li>Chest &lt; 38 → S</li>
          <li>38 ≤ Chest &lt; 40 → M</li>
          <li>40 ≤ Chest &lt; 42 → L</li>
          <li>Chest ≥ 42 → XL</li>
        </ul>
      </p>
      <p>Calculator is a tool to simplify size selection for clothing.</p>
      <p>Relative accuracy depends on correct chest measurement.</p>
      <p>Based on standard apparel sizing charts.</p>
      <p>To use the calculator, enter the chest size and click "Check Size".</p>
      <p><b>Note:</b> Sizes may vary slightly by manufacturer.</p>
      <p>It is important to measure the chest correctly for accurate sizing.</p>
      <p><b>Disclaimer:</b> This calculator is for reference only. Always try garments for final fit.</p>
      <br>
    </div>
  `;

  div.querySelector("#sizeBtn").onclick = () => {
    const chest = parseFloat(document.getElementById("chest").value);
    if (isNaN(chest)) {
      document.getElementById("sizeResult").innerHTML = "<b>Please enter a valid chest size!</b>";
      return;
    }

    let size = chest < 38 ? "S" : chest < 40 ? "M" : chest < 42 ? "L" : "XL";

    document.getElementById("sizeResult").innerHTML = `<b>Garment Size:</b> ${size}`;
  };

  return div;
}
