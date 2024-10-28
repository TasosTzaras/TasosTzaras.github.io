document.addEventListener('DOMContentLoaded', function () {
    const modeIcon = document.getElementById('modeIcon');
    const button = document.getElementById('toggleDarkMode');

    // Check localStorage for the dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        modeIcon.classList.remove('ri-moon-line');
        modeIcon.classList.add('ri-sun-line');
        button.innerHTML = 'Goodbye Friend<i id="modeIcon" class="ri-sun-line icon-margin"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        modeIcon.classList.remove('ri-sun-line');
        modeIcon.classList.add('ri-moon-line');
        button.innerHTML = 'Hello Friend<i id="modeIcon" class="ri-moon-line icon-margin"></i>';
    }

    document.getElementById('toggleDarkMode').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            modeIcon.classList.remove('ri-moon-line');
            modeIcon.classList.add('ri-sun-line');
            button.innerHTML = 'Goodbye Friend<i id="modeIcon" class="ri-sun-line icon-margin"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            modeIcon.classList.remove('ri-sun-line');
            modeIcon.classList.add('ri-moon-line');
            button.innerHTML = 'Hello Friend<i id="modeIcon" class="ri-moon-line icon-margin"></i>';
        }
    });
});
