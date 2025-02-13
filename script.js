// Function to navigate to yes.html when "Yes" is clicked
function nextPage() {
    window.location.href = "yes.html"; // Redirect to yes.html
}

// Function to move the "No" button when clicked
function moveButton() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * 200) - 100; // Random X offset
    const randomY = Math.floor(Math.random() * 200) - 100; // Random Y offset
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}