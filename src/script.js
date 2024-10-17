const yearSpan = document.querySelector('.year');
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navbarLists = document.querySelector('.nav-list');

const activeMenu = document.querySelector('.allMenus');
const allList = document.querySelectorAll('.block');

const lightBtn = document.querySelector('.fa-sun');
const darkBtn = document.querySelector('.fa-moon');
const body = document.querySelector('body');

darkBtn.addEventListener('click', () => {
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
    body.classList.add('dark');
});

lightBtn.addEventListener('click', () => {
    darkBtn.style.display = 'block';
    lightBtn.style.display = 'none';
    body.classList.remove('dark');
});

openMenu.addEventListener('click', () => {
    navbarLists.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    setTimeout(() => {
        activeMenu.classList.add('show');
    }, 10);
});

function closeMenuData() {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    activeMenu.classList.remove('show');
    setTimeout(() => {
        navbarLists.style.display = 'none';
    }, 500);
}

closeMenu.addEventListener('click', () => {
    closeMenuData();
});

allList.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            closeMenuData();
        }
    });
});

const date = new Date();
yearSpan.innerHTML = date.getFullYear();
