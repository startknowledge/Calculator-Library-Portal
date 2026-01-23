export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter number of vehicles:</label>
    <input type="number" id="vehicleCount" placeholder="Enter vehicles">

    <label>Enter average daily trips per vehicle:</label>
    <input type="number" id="tripsPerVehicle" placeholder="Trips per vehicle">

    <button onclick="calculateTraffic()">Calculate</button>
    <p id="trafficResult"></p>
    <br>
    <h3>Traffic Load Calculator</h3>
    <p>Estimate total daily trips and traffic load in a sector.</p>
    <p>Calculates traffic based on number of vehicles and their usage.</p>
    <p>Note: Values are approximate and may vary based on time of day.</p>
    <p>Helps urban planners evaluate congestion and road usage.</p>
    <p><b>Explanation:</b></p>
    <p>Traffic load is the total number of trips made by all vehicles in a day.</p>
    <p><b>Formula:</b></p>
    <p>Total Trips = Vehicles × Trips per Vehicle</p>
    <p><b>Example:</b>  
    500 vehicles × 3 trips/day = <b>1,500 trips/day</b>.</p>
    <p><b>Disclaimer:</b> Actual traffic may vary with time and season.</p>
    <br>
  `;

  window.calculateTraffic = function () {
    const vehicles = parseFloat(document.getElementById("vehicleCount").value);
    const trips = parseFloat(document.getElementById("tripsPerVehicle").value);
    if (isNaN(vehicles) || isNaN(trips)) return;

    const totalTrips = (vehicles * trips).toFixed(0);
    document.getElementById("trafficResult").innerHTML =
      `<b>Total Daily Trips:</b> ${totalTrips}`;
  };

  return div;
}
