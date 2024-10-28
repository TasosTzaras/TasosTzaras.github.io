document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.4
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                history.replaceState(null, null, `#${entry.target.id}`);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});