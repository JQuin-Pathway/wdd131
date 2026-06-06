document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewSubmissionCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewSubmissionCount", reviewCount);

    const counterDisplay = document.getElementById("review-counter-display");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
});