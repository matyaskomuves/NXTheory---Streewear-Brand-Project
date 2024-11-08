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

//Btn Onclick event

document.querySelector('.btn-primary').addEventListener('click', () => {
    document.querySelector('.btn-primary').classList.toggle('btn-onclick');
});

document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.btn-primary').classList.remove('btn-onclick');
});

document.querySelector('.btn-women').addEventListener('click', () => {
    document.querySelector('.btn-women').classList.toggle('btn-onclick-right');
});

document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.btn-women').classList.remove('btn-onclick-right');
});