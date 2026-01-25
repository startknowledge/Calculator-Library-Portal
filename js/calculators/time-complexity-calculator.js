export default function () {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>Time Complexity Calculator</h3>
      <p>This calculator estimates the number of operations an algorithm will perform for a given data size, based on common time complexity classes.</p>

      <label>Number of Operations (base operations per step)</label>
      <input id="operations" value="100">

      <label>Data Size (n)</label>
      <input id="dataSize" value="10">

      <button onclick="calcTimeComplexity()">Calculate</button>
      <div id="timeComplexityResult" style="margin-top:10px;"></div>

      <br>
      <p><b>Explanation:</b> Time complexity describes how the number of operations of an algorithm grows with the input size n.</p>
      <p><b>Common classes:</b> O(1) - constant, O(log n) - logarithmic, O(n) - linear, O(n log n) - linearithmic, O(n²) - quadratic, O(2ⁿ) - exponential, O(n!) - factorial.</p>
      <p>To use, enter the base number of operations and data size, then click "Calculate".</p>
      <p><b>Note:</b> This is an estimation; actual performance depends on algorithm details, hardware, and other factors.</p>
      <p><b>Disclaimer:</b> For educational/reference purposes only. Large data sizes for exponential/factorial complexities may exceed JavaScript limits.</p>
    `;

    window.calcTimeComplexity = function () {
        const operations = +document.getElementById("operations").value;
        const dataSize = +document.getElementById("dataSize").value;

        if (isNaN(operations) || isNaN(dataSize) || operations <= 0 || dataSize <= 0) {
            alert("Please enter valid positive numbers for operations and data size.");
            return;
        }

        const complexities = {
            'Constant time (O(1))': 1,
            'Logarithmic time (O(log n))': Math.log2(dataSize),
            'Linear time (O(n))': dataSize,
            'Linearithmic time (O(n log n))': dataSize * Math.log2(dataSize),
            'Quadratic time (O(n²))': dataSize * dataSize,
            'Exponential time (O(2ⁿ))': Math.pow(2, dataSize),
            'Factorial time (O(n!))': factorial(dataSize)
        };

        let resultHTML = '<h4>Estimated Time Complexities:</h4><ul>';
        for (const [complexity, multiplier] of Object.entries(complexities)) {
            let estimatedTime = multiplier * operations;

            // Handle very large numbers for readability
            if (estimatedTime > Number.MAX_SAFE_INTEGER) {
                resultHTML += `<li><b>${complexity}:</b> Very Large Number (exceeds JS safe integer)</li>`;
            } else {
                resultHTML += `<li><b>${complexity}:</b> ${Math.round(estimatedTime).toLocaleString()} operations</li>`;
            }
        }
        resultHTML += '</ul>';

        document.getElementById("timeComplexityResult").innerHTML = resultHTML;
    };

    function factorial(n) {
        if (n <= 1) return 1;
        if (n > 170) return Infinity; // Prevent JS number overflow
        return n * factorial(n - 1);
    }

    return div;
}
