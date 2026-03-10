(function () {
    function initProjectYearToggle() {
        var buttons = document.querySelectorAll('.year-switch-button[data-year]');
        var sections = document.querySelectorAll('[data-year-section]');

        if (!buttons.length || !sections.length) {
            return;
        }

        function showYear(year) {
            for (var i = 0; i < sections.length; i++) {
                var section = sections[i];
                section.hidden = section.getAttribute('data-year-section') !== year;
            }

            for (var j = 0; j < buttons.length; j++) {
                var button = buttons[j];
                var isActive = button.getAttribute('data-year') === year;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            }
        }

        for (var k = 0; k < buttons.length; k++) {
            buttons[k].addEventListener('click', function () {
                showYear(this.getAttribute('data-year'));
            });
        }

        showYear('1');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectYearToggle);
        return;
    }

    initProjectYearToggle();
})();
