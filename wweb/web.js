// Form submission handling
document.getElementById('repairForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const device = document.getElementById('device').value;
    const issue = document.getElementById('issue').value;

    // Simple validation
    if (name && email && phone && device && issue) {
        // Show success message
        alert(`Thanks ${name}! Your repair request for ${device} (${issue}) has been received. We'll contact you at ${phone} or ${email} shortly.`);

        // Reset form
        document.getElementById('repairForm').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});