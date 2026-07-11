let lastState = "";

async function updateValues() {
    const response = await fetch("/api/values");
    const values = await response.json();

  console.log(values.Batterie);

    const state = values.Netzrichtung + "_" + (values.Batterie > 0.05 ? "entladen" :
     values.Batterie < -0.05 ? "laden" : "idle");

    if (state !== lastState) {
        draw(values);
        lastState = state;
    }

    document.getElementById("Photovoltaik").innerText = values.Photovoltaik.toFixed(2) + " kW";
    document.getElementById("Haus").innerText = values.Haus.toFixed(2) + " kW";
    document.getElementById("Batteriestand").innerText = values.Batteriestand.toFixed(0) + " %";

    document.getElementById("Netzleistung").innerText = values.Netzleistung.toFixed(2) + " kW";
    document.getElementById("Netzrichtung").innerText = values.Netzrichtung;
}

updateValues();
// setInterval(updateValues, 1000);