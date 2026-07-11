const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

svg.id = "leitungen";
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.style.position = "absolute";
svg.style.left = "0";
svg.style.top = "0";
svg.style.pointerEvents = "none";

document.getElementById("dashboard").prepend(svg);

function center(id) {
    const r = document.getElementById(id).getBoundingClientRect();

    return {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2,
        r: r.width / 2
    };
}

function connection(a, b, color, power) {

    const dx = b.x - a.x;
    const dy = b.y - a.y;

    const len = Math.sqrt(dx * dx + dy * dy);

    const x1 = a.x + (dx / len) * a.r;
    const y1 = a.y + (dy / len) * a.r;

    const x2 = b.x - (dx / len) * b.r;
    const y2 = b.y - (dy / len) * b.r;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    line.setAttribute("stroke", "#555");
    line.setAttribute("stroke-width", "4");

    svg.appendChild(line);

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    dot.setAttribute("r", 6);
    dot.setAttribute("fill", color);

    svg.appendChild(dot);

    let t = 0;

    function animate() {

        const speed = Math.max(0.004, Math.abs(power) * 0.005);

        t += speed;

        if (t > 1)
            t = 0;

        dot.setAttribute("cx", x1 + (x2 - x1) * t);
        dot.setAttribute("cy", y1 + (y2 - y1) * t);

        requestAnimationFrame(animate);
    }

    animate();
}

function draw(values) {

    svg.innerHTML = "";

    const pv = center("Photovoltaik_Karte");
    const netz = center("Netz_Karte");
    const haus = center("Haus_Karte");
    const akku = center("Batterie_Karte");

    connection(pv, haus, "orange", values.Haus);

    if (values.Netzleistung > 0.05)
        {
            if (values.Netzrichtung === "Einspeisung") {
            connection(pv, netz, "lime", values.Netzleistung);
            } 
                else {
                connection(netz, haus, "dodgerblue", values.Netzleistung);
                }
        }   

    if (values.Batterie < -0.05)
        connection(akku, haus, "cyan", Math.abs(values.Batterie));

    if (values.Batterie > 0.05)
        connection(pv, akku, "yellow", values.Batterie);
}