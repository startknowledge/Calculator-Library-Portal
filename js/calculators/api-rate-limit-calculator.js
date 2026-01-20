export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h2>API Rate Limit Calculator</h2>
    <label for="requestsInput">Enter Number of Requests:</label>
    <input type="number" id="requestsInput" placeholder="e.g., 1000">
    <label for="timeWindowInput">Enter Time Window (in minutes):</label>
    <input type="number" id="timeWindowInput" placeholder="e.g., 1">
    <button id="calculateBtn">Calculate Rate Limit</button>
    <h3>Results:</h3>
    <p id="rateLimitResult">Rate Limit: </p>
    `;
    const requestsInput = div.querySelector("#requestsInput");
    const timeWindowInput = div.querySelector("#timeWindowInput");
    const calculateBtn = div.querySelector("#calculateBtn");
    const rateLimitResult = div.querySelector("#rateLimitResult");
    calculateBtn.addEventListener("click", () => {
    const requests = parseInt(requestsInput.value.trim());
    const timeWindow = parseInt(timeWindowInput.value.trim());
    if (isNaN(requests) || requests <= 0) {
      alert("Please enter a valid number of requests.");
      return;
    }
    if (isNaN(timeWindow) || timeWindow <= 0) {
      alert("Please enter a valid time window in minutes.");
      return;
    }
    const rateLimit = requests / timeWindow;
    rateLimitResult.textContent = `Rate Limit: ${rateLimit} requests per minute`;
  });
  return div;
}
