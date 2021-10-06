const bodyEl = document.querySelector("body");

const colorCount = 100;

async function getColors(count) {
    const res = await fetch(`https://apis.scrimba.com/hexcolors/?count=${count}`);
    const data = await res.json();
    return data.colors;
}


getColors(colorCount)
    .then(colors => {
        let html = "<div class='colors'>";
        for (const color of colors) {
            html += `
    <div class=color style="background-color: ${color.value};">
        
    </div>`;
        }
        html += "\n</div>";
        bodyEl.innerHTML = html;
    });