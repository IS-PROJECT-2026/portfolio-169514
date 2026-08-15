// Telemetry ticker — cosmetic terminal-style status line
(function () {
  const messages = [
    "system status: online",
    "uptime: 99.98%",
    "last deploy: success",
    "monitoring: active",
    "connection: secure",
    "build: passing"
  ];

  function createTicker() {
    const header = document.querySelector(".terminal-header");
    if (!header) return;

    const ticker = document.createElement("span");
    ticker.className = "telemetry-ticker";
    ticker.setAttribute("aria-live", "polite");
    header.appendChild(ticker);

    let index = 0;

    function updateTicker() {
      ticker.textContent = `[ ${messages[index]} ]`;
      index = (index + 1) % messages.length;
    }

    updateTicker();
    setInterval(updateTicker, 3000);
  }

  document.addEventListener("DOMContentLoaded", createTicker);
})();
