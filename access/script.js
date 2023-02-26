const dropDown = document.querySelectorAll('.menu-mobile--menu'); //khai báo mảng gồm các phần tử có class này//
// const iconDropdown = document.querySelectorAll('.icon-dropdown');

const headerMenu = document.getElementById('header-menu');
headerMenu.addEventListener('click', () => {
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.style.display = 'block';
});

const close = document.getElementById('close');
close.addEventListener('click', () => {
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.style.display = 'none';
});


const modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', () => {
    const modalMilk = document.getElementById('modal-milk');
    modalMilk.style.display = 'none';
});

dropDown.forEach(element => {
    const callId = element.id;
    const icon = document.getElementById(`icon-${callId}`);
    const callMenu = document.getElementById(`list-${callId}`);
    element.addEventListener('click', () => {
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            callMenu.style.display = 'block';
            element.style.backgroundColor = '#f9f9f9';
            element.style.fontWeight = '600';
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            callMenu.style.display = 'none';
            element.style.backgroundColor = '#fff';
            element.style.fontWeight = '400';
        }
    })
});

