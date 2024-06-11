const burgerBtn = document.getElementById('burger-btn');
const sidebarOverlay = document.createElement('div');
const navMenu = document.getElementById('nav-menu');
const headerContainer = document.querySelector('.m\\:flex .m\\:items-center .m\\:space-x-14');
const aside = document.querySelector('aside');

const sidebarContainer = document.createElement('div');
sidebarContainer.classList.add('fixed', 'top-0', 'right-0', 'h-full', 'bg-violet-950', 'z-50', 'p-4', 'overflow-y-auto', 'hidden');

function checkWindowWidth() {
  const windowWidth = window.innerWidth;
  const mobileWidth = 768; 

  if (windowWidth >= mobileWidth) {
    navMenu.style.display = 'block';
    aside.style.display = 'block';
    sidebarContainer.innerHTML = ''; 
  } else {
    navMenu.style.display = 'none';
    aside.style.display = 'none';
  }
}

function openSidebar() {
  sidebarOverlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'z-40');
  document.body.appendChild(sidebarOverlay);
  document.body.appendChild(sidebarContainer);

  sidebarContainer.classList.remove('hidden');

  checkWindowWidth();

  if (window.innerWidth < 768) {
    const navClone = navMenu.cloneNode(true);
    const asideClone = aside.cloneNode(true);
    navClone.style.display = 'grid';
    asideClone.style.display = 'block';
    sidebarContainer.appendChild(navClone);
    sidebarContainer.appendChild(asideClone);
  }

  sidebarOverlay.addEventListener('click', closeSidebar);
}

function closeSidebar() {
  sidebarOverlay.removeEventListener('click', closeSidebar);
  sidebarOverlay.remove();
  sidebarContainer.classList.add('hidden');
  checkWindowWidth();
}

burgerBtn.addEventListener('click', openSidebar);
window.addEventListener('resize', checkWindowWidth);
checkWindowWidth();
