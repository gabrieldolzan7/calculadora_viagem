function calculateTrip() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelUsed = parseFloat(document.getElementById('fuelUsed').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

    var autonomy = distance / fuelUsed;
    var tripCost = (fuelUsed * fuelPrice).toFixed(2);
    var costPerKm = (tripCost / distance).toFixed(2);

    document.getElementById('autonomy').innerText = autonomy.toFixed(2);
    document.getElementById('tripCost').innerText = tripCost;
    document.getElementById('costPerKm').innerText = costPerKm;

    document.getElementById('result').classList.remove('hidden');
}
