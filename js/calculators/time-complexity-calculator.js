export default function () {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>Time Complexity Calculator</h3>
        <label>Number of Operations</label>
        <input id="operations" value="100">

        <label>Data Size (n)</label>
        <input id="dataSize" value="10">

        <button onclick="calcTimeComplexity()">Calculate</button>
        <div id="timeComplexityResult"></div>
    `;
    window.calcTimeComplexity = function () {
        const operations = +document.getElementById("operations").value;
        const dataSize = +document.getElementById("dataSize").value;
        if (isNaN(operations) || isNaN(dataSize) || operations <= 0 || dataSize <= 0) {
            alert("Please enter valid positive numbers for operations and data size.");
            return;
        }
        const complexities = {
            'Constant time → always 1 operation (O(1))  '      : 1,  //Constant time → always 1 operation
            'Logarithmic time (O(log n))  '  : Math.log2(dataSize),  //Logarithmic time
            'Linear time (O(n))  '      : dataSize, //Linear time
            'Linearithmic time (O(n log n))  ' : dataSize * Math.log2(dataSize), //Linearithmic time
            'Quadratic time (O(n²))  '     : dataSize * dataSize, //Quadratic time 
            'Exponential time (O(2ⁿ))  '     : Math.pow(2, dataSize), //Exponential time
            'Factorial time (O(n!))  '     : factorial(dataSize) //Factorial time
        };
        let resultHTML = '<h4>Estimated Time Complexities:</h4><ul>';
        for (const [complexity, multiplier] of Object.entries(complexities)) {
            const estimatedTime = Math.round(operations * multiplier);
            resultHTML += `<li><b>${complexity}:</b> ${estimatedTime.toLocaleString()} operations</li>`;
        }
        resultHTML += '</ul>';
        document.getElementById("timeComplexityResult").innerHTML = resultHTML;
    };

    function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }   

    return div;
}



/*export default function() {
    // TODO: Add implementation
}
return {
    calculateTimeComplexity: function(operations, dataSize) {
        if (operations <= 0 || dataSize <= 0) {
            return "Invalid input";
        }
        
        const complexities = {
            'O(1)': 1,
            'O(log n)': Math.log2(dataSize),
            'O(n)': dataSize,
            'O(n log n)': dataSize * Math.log2(dataSize),
            'O(n²)': dataSize * dataSize,
            'O(2ⁿ)': Math.pow(2, dataSize),
            'O(n!)': this.factorial(dataSize)
        };
        
        const results = {};
        for (const [complexity, multiplier] of Object.entries(complexities)) {
            results[complexity] = Math.round(operations * multiplier);
        }
        
        return results;
    },
    
    factorial: function(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }
};*/
