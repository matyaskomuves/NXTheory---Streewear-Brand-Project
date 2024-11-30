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

// //Btn Onclick event

// document.querySelector('.btn-primary').addEventListener('click', () => {
//     document.querySelector('.btn-primary').classList.toggle('btn-onclick');
// });

// document.querySelector('.btn-close').addEventListener('click', () => {
//     document.querySelector('.btn-primary').classList.remove('btn-onclick');
// });

// document.querySelector('.btn-women').addEventListener('click', () => {
//     document.querySelector('.btn-women').classList.toggle('btn-onclick-right');
// });

// document.querySelector('.btn-close').addEventListener('click', () => {
//     document.querySelector('.btn-women').classList.remove('btn-onclick-right');
// });

function subscribeValidation() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert('Please enter an email address');
        return;
    }

    if (emailRegex.test(email)) {
        const existingSuccessMessage = document.querySelector('.container');
        if (existingSuccessMessage) {
            existingSuccessMessage.remove();
        }

        const divSuccess = document.createElement('div');
        divSuccess.classList.add('container');
        divSuccess.innerHTML = '<p>Thank you for subscribing!</p>';

        document.body.appendChild(divSuccess);
    } else {
        const divFailure = document.createElement('div');
        divFailure.classList.add('container');
        divFailure.innerHTML = '<p>The given email does not exist!</p>';

        document.body.appendChild(divFailure);
    }
}
