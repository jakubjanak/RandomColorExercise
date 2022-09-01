const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const sumRgb = r + g + b;

    const rgb = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgb;

    if (sumRgb <= 100) {
        h1.style.color = "white";
    }
    
    h1.innerText = rgb;
    
}

btn.addEventListener("click", generateColor);