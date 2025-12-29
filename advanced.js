const input = document.getElementById("numbers");
const calculateBtn = document.getElementById("calculate");

const meanEl = document.getElementById("mean");
const varianceEl = document.getElementById("variance");
const stddevEl = document.getElementById("stddev");
const tableBody = document.getElementById("table-body");

function parseNumbers(text) {
  return text
    .split(",")
    .map(v => Number(v.trim()))
    .filter(v => Number.isFinite(v));
}

function populationStandardDeviation(data) {
  const n = data.length;
  const mean = data.reduce((a, b) => a + b, 0) / n;

  const squaredDeviations = data.map(x => {
    const deviation = x - mean;
    return {
      value: x,
      deviation,
      squared: deviation * deviation
    };
  });

  const variance =
    squaredDeviations.reduce((s, d) => s + d.squared, 0) / n;

  return {
    mean,
    variance,
    stddev: Math.sqrt(variance),
    breakdown: squaredDeviations
  };
}

function render(result) {
  meanEl.textContent = result.mean.toFixed(3);
  varianceEl.textContent = result.variance.toFixed(3);
  stddevEl.textContent = result.stddev.toFixed(3);

  tableBody.innerHTML = "";

  result.breakdown.forEach(row => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${row.value}</td>
      <td>${row.deviation.toFixed(3)}</td>
      <td>${row.squared.toFixed(3)}</td>
    `;

    tableBody.appendChild(tr);
  });
}

calculateBtn.addEventListener("click", () => {
  const values = parseNumbers(input.value);

  if (values.length === 0) {
    meanEl.textContent = "—";
    varianceEl.textContent = "—";
    stddevEl.textContent = "—";
    tableBody.innerHTML = "";
    return;
  }

  const result = populationStandardDeviation(values);
  render(result);
});
