const bodyEl = document.querySelector("body");

const colorCount = 100;

async function getColors(count) {
    const res = await fetch(`https://apis.scrimba.com/hexcolors/?count=${count}`);
    const data = await res.json();
    return data;
}

getColors(colorCount)
    .then(data => {
        let html = "<div class='colors'>";
        for (const color of data.colors) {
            html += `
    <div class=color style="background-color: ${color.value};">
        
    </div>`;
        }
        html += "\n</div>";

        console.log(html);
        bodyEl.innerHTML = html;
    });