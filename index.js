const stops = [
    "College Gate",
    "Main Road",
    "Market",
    "Bus Stand",
    "City Center"
];

let currentIndex = 0;

function updateBus() {
    if (currentIndex < stops.length - 1) {
        currentIndex++;
        document.getElementById("stop").innerText = stops[currentIndex];
    } else {
        document.getElementById("status").innerText = "Arrived";
        document.getElementById("stop").innerText = "City Center";
    }
}
