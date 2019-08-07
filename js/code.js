const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', e => e.preventDefault())
})

const navButton = document.querySelector('.nav-button');
const element = document.querySelector('.nav-list');
let open = false;

const toggleNav = () => {
    navButton.classList.toggle('cross');
    element.classList.contains('hidden') ? openNav() : closeNav();
    element.addEventListener('transitionend', complete)
}

const complete = () => {
    if(open) {
        element.classList.remove('transition');
        element.classList.add('open');
        element.style.height = '';
    } else {
        element.classList.remove('transition');
        element.classList.add('hidden');
    }
}

const openNav = () => {
    element.classList.remove('hidden');
    element.classList.add('transition');
    
    const dimension = element.scrollHeight;

    element.style.height = `${dimension}px`;
    open = !open;
}

const closeNav = () => {
    element.classList.remove('open');

    const dimension = element.getBoundingClientRect().height;

    element.style.height = `${dimension}px`;
    element.offsetHeight;
    // css transition doesn't work without this line
    element.classList.add('transition');
    element.style.height = '';
    open = !open;
}

navButton.addEventListener('click', toggleNav);