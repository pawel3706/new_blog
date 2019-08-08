class NavList {
    constructor() {
        this.button = document.querySelector('.nav-button');
        this.element = document.querySelector('.nav-list');
        this.open = false;
    }

    toggleNav() {
        this.button.classList.toggle('cross');
        this.element.classList.contains('hidden') ? this.openNav() : this.closeNav();
        this.element.addEventListener('transitionend', this.complete.bind(this))
    }

    openNav() {
        this.element.classList.remove('hidden');
        this.element.classList.add('transition');
        
        const dimension = this.element.scrollHeight;
    
        this.element.style.height = `${dimension}px`;
        this.open = !this.open;
    }

    closeNav() {
        this.element.classList.remove('open');
    
        const dimension = this.element.getBoundingClientRect().height;
    
        this.element.style.height = `${dimension}px`;
        this.element.offsetHeight;
        // css transition doesn't work without this line
        this.element.classList.add('transition');
        this.element.style.height = '';
        this.open = !this.open;
    }

    complete() {
        if(this.open) {
            this.element.classList.remove('transition');
            this.element.classList.add('open');
            this.element.style.height = '';
        } else {
            this.element.classList.remove('transition');
            this.element.classList.add('hidden');
        }
    }
}