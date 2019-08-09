class Init {
    constructor() {

        this.navList = new NavList();

        this.navList.button.addEventListener('click', this.navList.toggleNav.bind(this.navList));
        
        document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.preventDefault()));
    }
}

const init = new Init();