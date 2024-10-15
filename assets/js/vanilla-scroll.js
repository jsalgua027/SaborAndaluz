document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offcanvasElement = document.querySelector('.offcanvas');
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            bsOffcanvas.hide();
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        });
    });
});
