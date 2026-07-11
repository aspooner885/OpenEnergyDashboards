const btn = document.getElementById("themeToggle");

const mode = localStorage.getItem("theme");

if (mode === "light") {
    document.body.classList.add("light");
}

btn.innerHTML = document.body.classList.contains("light") ? "☀️" : "🌙";

btn.onclick = () => {

    document.body.classList.toggle("light");

    const light = document.body.classList.contains("light");

    localStorage.setItem("theme", light ? "light" : "dark");

    btn.innerHTML = light ? "☀️" : "🌙";

};