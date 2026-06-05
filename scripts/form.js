const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectField = document.getElementById("product-name");
    
    if (selectField) {
        products.forEach(product => {
            const opt = document.createElement("option");
            opt.value = product.id;
            opt.textContent = product.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            selectField.appendChild(opt);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewSubmissionCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewSubmissionCount", reviewCount);

    const counterDisplay = document.getElementById("review-counter-display");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
});