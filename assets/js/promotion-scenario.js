(() => {
  const demo = document.querySelector("[data-promo-demo]");

  if (!(demo instanceof HTMLElement)) {
    return;
  }

  const slider = demo.querySelector("[data-uplift-slider]");
  const output = demo.querySelector("[data-uplift-output]");
  const orderCount = demo.querySelector("[data-order-count]");
  const baselineBar = demo.querySelector("[data-baseline-bar]");
  const scenarioBar = demo.querySelector("[data-scenario-bar]");
  const scenarioProfit = demo.querySelector("[data-scenario-profit]");
  const status = demo.querySelector("[data-demo-status]");
  const baseline = Number(demo.dataset.baselineProfit);
  const profitPerOrder = Number(demo.dataset.promoProfitPerOrder);

  if (
    !(slider instanceof HTMLInputElement) ||
    !(output instanceof HTMLOutputElement) ||
    !(orderCount instanceof HTMLElement) ||
    !(baselineBar instanceof HTMLElement) ||
    !(scenarioBar instanceof HTMLElement) ||
    !(scenarioProfit instanceof HTMLElement) ||
    !(status instanceof HTMLElement) ||
    !Number.isFinite(baseline) ||
    !Number.isFinite(profitPerOrder) ||
    profitPerOrder < 0
  ) {
    console.error("Promotion scenario is missing valid input or display elements.");
    return;
  }

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(value);

  const updateScenario = () => {
    const uplift = slider.valueAsNumber;
    const orderMultiplier = 1 + uplift / 100;
    const profit = orderMultiplier * profitPerOrder;
    const maxMultiplier = 1 + Number(slider.max) / 100;
    const maxProfit = Math.max(baseline, maxMultiplier * profitPerOrder);
    const profitDifference = Math.abs(profit - baseline);

    output.textContent = `+${uplift}%`;
    orderCount.textContent = `${orderMultiplier.toLocaleString("en-GB", {
      maximumFractionDigits: 1,
    })} ${orderMultiplier === 1 ? "order" : "orders"}`;
    scenarioProfit.textContent = formatMoney(profit);
    baselineBar.style.width = `${(baseline / maxProfit) * 100}%`;
    scenarioBar.style.width = `${Math.min((profit / maxProfit) * 100, 100)}%`;

    if (profit < baseline) {
      demo.dataset.state = "below";
      status.textContent = `${formatMoney(profit)} gross profit, ${formatMoney(
        profitDifference,
      )} below the ${formatMoney(baseline)} baseline.`;
    } else if (profit > baseline) {
      demo.dataset.state = "above";
      status.textContent = `${formatMoney(profit)} gross profit, ${formatMoney(
        profitDifference,
      )} above the ${formatMoney(baseline)} baseline.`;
    } else {
      demo.dataset.state = "break-even";
      status.textContent = `At break-even: both scenarios earn ${formatMoney(
        baseline,
      )} gross profit.`;
    }
  };

  slider.addEventListener("input", updateScenario);
  updateScenario();
})();
