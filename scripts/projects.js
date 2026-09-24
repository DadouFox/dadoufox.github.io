function showYear(year, sections, buttons) {
    for (let section of sections) {
        section.hidden = section.getAttribute('data-year-section') !== year;
    }
    for (let button of buttons) {
        let isActive = button.getAttribute('data-year') === year;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
}

function initProjectYearToggle() {
    let buttons = document.querySelectorAll('.year-switch-button[data-year]');
    let sections = document.querySelectorAll('[data-year-section]');

    if (!buttons.length || !sections.length) {
        return;
    }

    for (let button of buttons) {
        button.addEventListener('click', function () {
            showYear(this.getAttribute('data-year'), sections, buttons);
        });
    }

    showYear('1', sections, buttons);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectYearToggle);
} else {
    initProjectYearToggle();
}
