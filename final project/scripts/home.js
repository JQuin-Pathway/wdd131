document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');
    const orderForm = document.getElementById('bookingForm');
    const costDisplay = document.getElementById('costLiveEstimate');

    function toggleMobileMenu() {
        if (!menuToggle || !navMenu) return;
        navMenu.classList.toggle('nav-active');
        if (navMenu.classList.contains('nav-active')) {
            menuToggle.innerHTML = '✕';
        } else {
            menuToggle.innerHTML = '☰';
        }
    }

    function calculatePriceEstimate() {
        if (!orderForm || !costDisplay) return;

        const pricingTierLookup = {
            pickup: 25.00,
            instore: 0.00,
            tailoring: 45.00
        };

        const premiumKeywords = ['rush', 'same-day', 'silk', 'leather', 'wedding'];
        const selectedOption = document.getElementById('service-type').value;
        const userNotesInput = document.getElementById('notes').value.toLowerCase();

        let calculatedTotal = pricingTierLookup[selectedOption] || 0.00;
        let appliedSurcharges = 0;

        premiumKeywords.forEach((keyword) => {
            if (userNotesInput.includes(keyword)) {
                calculatedTotal += 15.00;
                appliedSurcharges += 15.00;
            }
        });

        const formattedOutput = `<span style="color: #2ecc71; font-weight: bold;">$${calculatedTotal.toFixed(2)}</span> (Includes $${appliedSurcharges.toFixed(2)} in rush fees)`;
        costDisplay.innerHTML = formattedOutput;

        localStorage.setItem('cachedEstimateTotal', calculatedTotal.toFixed(2));
        localStorage.setItem('cachedSelectedService', selectedOption);
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (orderForm) {
        orderForm.addEventListener('input', calculatePriceEstimate);
    }

    if (costDisplay && localStorage.getItem('cachedEstimateTotal')) {
        const storedTotal = localStorage.getItem('cachedEstimateTotal');
        costDisplay.innerHTML = `Welcome back! Your last estimate was: <span style="color: #2ecc71; font-weight: bold;">$${storedTotal}</span>`;
    }
});