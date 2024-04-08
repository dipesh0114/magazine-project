document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menuClose = document.getElementById('menu-close');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener('click', function () {
        navigation.classList.add('active');
    });

    menuClose.addEventListener('click', function () {
        navigation.classList.remove('active');
    });
});