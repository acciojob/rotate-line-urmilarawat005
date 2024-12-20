//your JS code here. If required.
let angle = 0;
const line = document.getElementById("line");

function rotateLine() {
    // Increment the angle by 2 degrees
    angle += 2;

    // Apply the rotation to the line
    line.style.transform = `rotate(${angle}deg)`;

    // Repeat the rotation every 20ms
    setTimeout(rotateLine, 20);
}

// Start rotating the line
rotateLine();