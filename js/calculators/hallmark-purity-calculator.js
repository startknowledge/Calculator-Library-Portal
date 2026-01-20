export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
       
        <p>This calculator helps you determine the purity of gold jewelry based on its hallmark. Hallmarks indicate the fineness of gold, which is essential for assessing its value.</p>

        <div class="calculator-form">
            <label for="hallmark">Select Hallmark:</label>
            <select id="hallmark">
                <option value="24">24K (99.9% Pure)</option>
                <option value="22">22K (91.6% Pure)</option>
                <option value="18">18K (75% Pure)</option>
                <option value="14">14K (58.3% Pure)</option>
                <option value="10">10K (41.7% Pure)</option>
            </select>
            <button id="calculateBtn">Calculate Purity</button>
        </div>
        <div class="calculator-result" id="result"></div>
    `;
    window.calculateHallmarkPurity = function() {
        const hallmark = document.getElementById("hallmark").value;
        const purity = parseFloat(hallmark);
        if (isNaN(purity)) {
            document.getElementById("result").innerText = "Please select a valid hallmark.";
            return;
        }
        document.getElementById("result").innerText = `Purity: ${purity}%`;
    }
    setTimeout(() => {
        document.getElementById("calculateBtn").addEventListener("click", calculateHallmarkPurity);
    }, 100);
    return div;
}