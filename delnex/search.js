async function search() {
  const q = document.getElementById("q").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = "";

  const sites = await fetch("sites.json").then(r => r.json());

  let found = false;

  sites.forEach(site => {
    if (
      site.name.toLowerCase().includes(q) ||
      site.description.toLowerCase().includes(q)
    ) {
      found = true;
      results.innerHTML += `
        <div class="result">
          <a href="${site.url}" target="_blank">
            <h3>${site.name}</h3>
          </a>
          <p>${site.description}</p>
        </div>
      `;
    }
  });

  if (!found) {
    results.innerHTML = "<p>No Delnex sites found.</p>";
  }
}
