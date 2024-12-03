// Scroll Effect with Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inView');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.notInView').forEach(el => {
    observer.observe(el);
});

function subscribeValidation() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com']

    if (!email) {
        alert('Please enter an email address');
        return;
    }

    let formContainer = document.getElementById('formContainer');
    const existingFailureMessage = document.querySelector('.not-subscribed');
    const existingSuccessMessage = document.querySelector('.subscribed');

    if (existingSuccessMessage) {
        existingSuccessMessage.remove();
    }
    if (existingFailureMessage) {
        existingFailureMessage.remove();
    }

    if (emailRegex.test(email)) {
        const domain = email.split('@')[1];
        if (allowedDomains.includes(domain)) {
            const divSuccess = document.createElement('div');
            divSuccess.classList.add('container', 'subscribed');
            divSuccess.innerHTML = '<p>Thank you for subscribing! :-]</p>';

            formContainer.appendChild(divSuccess);
        } else {
            const divFailure = document.createElement('div');
            divFailure.classList.add('container', 'not-subscribed');
            divFailure.innerHTML = '<p>The given email address does not exist! :-[</p>';

            formContainer.appendChild(divFailure);
        }
    }
}