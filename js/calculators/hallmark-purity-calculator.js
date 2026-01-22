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
        <br>
        <p>The Hallmark Purity Calculator helps you determine the purity of gold jewelry based on its hallmark. By selecting the appropriate hallmark, users can easily find out the percentage of pure gold in their jewelry.</p>
        <p>This calculator is useful for jewelers, buyers, and sellers who need to assess the value of gold items. Understanding the purity of gold is essential for pricing, trading, and investment purposes.</p>
        <p><b>Note:</b> Ensure that you select the correct hallmark to get an accurate purity percentage.</p>
        <p><b>Example:</b> A piece of jewelry with a 22K hallmark indicates that it is 91.6% pure gold.</p>
        <p><b>Disclaimer:</b> This calculator provides an estimate based on standard hallmark values. Actual purity may vary based on additional factors such as alloy composition and manufacturing processes.</p>
        <br>
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