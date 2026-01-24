export default function () {
  const div = document.createElement("div");

  const data = {
    women: {
      4: { Bust: 32.3, Waist: 25.2, Hip: 34.6 },
      6: { Bust: 34.3, Waist: 27.2, Hip: 36.6 },
      8: { Bust: 36.2, Waist: 29.1, Hip: 38.6 },
      10:{ Bust: 38.2, Waist: 31.1, Hip: 40.6 },
      12:{ Bust: 40.2, Waist: 33.1, Hip: 42.5 }
    },
    men: {
      44: { Chest: 34.6, Waist: 29.1, Hip: 36.2 },
      46: { Chest: 36.2, Waist: 30.7, Hip: 37.8 },
      48: { Chest: 38.0, Waist: 33.1, Hip: 39.0 },
      50: { Chest: 39.4, Waist: 33.9, Hip: 41.0 },
      52: { Chest: 42.5, Waist: 38.6, Hip: 44.9 }
    }
  };

  div.innerHTML = `
    <h3>Tailoring Measurement Converter</h3>
    <p>Quickly view standard clothing measurements in inches and centimeters.</p>

    <label>Select Category</label>
    <select id="gender" onchange="loadSizes()">
      <option value="women">Women</option>
      <option value="men">Men</option>
    </select><br><br>

    <label>Select Size</label>
    <select id="size" onchange="showMeasurements()"></select><br><br>

    <div id="measureResult"></div>

    <p><b>Explanation:</b><br>
      This tool shows standard body measurements for selected sizes. Measurements are displayed in inches (") and converted to centimeters (cm) for convenience.
    </p>

    <p><b>Use Case:</b><br>
      Useful for tailors, fashion designers, or shoppers wanting to know exact body measurements before tailoring or purchasing clothes.
    </p>

    <p><b>Disclaimer:</b><br>
      These measurements are standard approximations and may vary by brand, manufacturer, or body type. Use as a reference only.<br></p>
  `;

  window.loadSizes = function () {
    const gender = genderSelect();
    const sizeSel = document.getElementById("size");
    sizeSel.innerHTML = "";

    Object.keys(data[gender]).forEach(size => {
      sizeSel.innerHTML += `<option value="${size}">${size}</option>`;
    });

    showMeasurements();
  };

  window.showMeasurements = function () {
    const gender = genderSelect();
    const size = document.getElementById("size").value;
    const measures = data[gender][size];

    let html = `<h4>${gender.toUpperCase()} Size ${size}</h4>`;
    for (let key in measures) {
      let inch = measures[key];
      let cm = inch * 2.54;
      html += `<b>${key}:</b> ${inch}" / ${cm.toFixed(1)} cm<br>`;
    }

    document.getElementById("measureResult").innerHTML = html;
  };

  function genderSelect() {
    return document.getElementById("gender").value;
  }

  setTimeout(loadSizes, 0);

  return div;
}
