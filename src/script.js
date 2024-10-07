const yearSpan = document.querySelector('.year');
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navbarLists = document.querySelector('.nav-list');

const activeMenu = document.querySelector('.allMenus')
const allList = document.querySelectorAll('.block');

openMenu.addEventListener('click', () => {
    navbarLists.style.display = "block";
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
    setTimeout(() => {
        activeMenu.classList.add('show');
    }, 10);
})

function closeMenuData(){
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    activeMenu.classList.remove('show');
    setTimeout(() => {
        navbarLists.style.display = 'none';
    }, 500);
}

closeMenu.addEventListener('click', () => {
    closeMenuData()
});

allList.forEach((link) => {
    link.addEventListener('click', () => {
        closeMenuData()
    });
});



const date = new Date()
yearSpan.innerHTML = date.getFullYear()