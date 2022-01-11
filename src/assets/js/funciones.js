window.onload = function() {
    let header = document.querySelector('#uno');

    window.addEventListener('scroll', function() {

        let windowPosition = window.scrollY;
        if (windowPosition > 0) {
            header.classList.remove('unos');
            header.classList.add('scrolling-active');

        } else {
            header.classList.remove('scrolling-active');
            header.classList.add('unos');
        }


    })
}