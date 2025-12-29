function standardDeviation(arr) {
  const n = arr.length;
  const mean = arr.reduce((sum, v) => sum + v, 0) / n;

  const variance =
    arr.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / n;

  const std = Math.sqrt(variance);

  return Math.round(std * 1000) / 1000;
}
