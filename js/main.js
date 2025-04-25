function startNow() {
    alert("Welcome to Capitalent! 🚀 Get started today.");
}
// Pricing section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle pricing button clicks
    const freeBtn = document.querySelector('.free-btn');
    const proBtn = document.querySelector('.pro-btn');

    if (freeBtn) {
        freeBtn.addEventListener('click', function() {

            alert('Redirecting to free signup...');

        });
    }

    if (proBtn) {
        proBtn.addEventListener('click', function() {

            alert('Redirecting to pro plan checkout...');

        });
    }

    // Animation for pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    pricingCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});
// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the data to your server
            console.log('Form submitted:', { name, email, message });

            // Show success message (you can customize this)
            alert('Thank you for your message! We will contact you soon.');

            // Reset the form
            contactForm.reset();
        });
    }
});