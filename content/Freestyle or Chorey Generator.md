<div id="move-shuffle-container"></div>
<script>
(function () {
  const SITE_ROOT = "/quartz-poledex/"; // update if you ever rename the repo again

function shuffle(array) {
const result = array.slice();
for (let i = result.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() \* (i + 1));
\[result\[i], result\[j]] = \[result\[j], result\[i]];
}
return result;
}

async function getMoveLinks() {
const data = await fetchData;
const entries = Object.values(data.content || data);
return entries
.filter(e => e.slug.startsWith("moves/dance/") || e.slug.startsWith("moves/floorwork/"))
.map(e => `<a href="${SITE_ROOT}${e.slug}" class="internal">${e.title}</a>`);
}

async function build(containerEl) {
containerEl.innerHTML = "";
const button = document.createElement("button");
button.textContent = "Regenerate";
button.style.marginBottom = "1em";
const list = document.createElement("ol");

```
const linksHtml = await getMoveLinks();

function generate() {
  const selection = shuffle(linksHtml).slice(0, 20);
  list.innerHTML = "";
  for (const html of selection) {
    const li = document.createElement("li");
    li.innerHTML = html;
    list.appendChild(li);
  }
}
button.addEventListener("click", generate);
containerEl.appendChild(button);
containerEl.appendChild(list);
generate();
```

}

function setupIfPresent() {
const containerEl = document.querySelector("#move-shuffle-container");
if (containerEl) build(containerEl);
}

document.addEventListener("nav", setupIfPresent);
setupIfPresent();
})(); </script>
