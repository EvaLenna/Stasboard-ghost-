let clicks = 47;
let earnings = (clicks * 0.05).toFixed(2);
document.getElementById('clicks').textContent = clicks;
document.getElementById('earnings').textContent = earnings;
function payout() {
  alert(`Wypłacono ${earnings} zł. Dane wysłane do Stasia!`);
}
