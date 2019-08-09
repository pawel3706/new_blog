class Init {
    constructor() {

        this.pinElements = [
            new Pin('.hero-body', '.hero', 0, duration, true),
        ];

        this.progress = new Progress(this.pinElements);
        this.navList = new NavList();

        window.addEventListener('scroll', this.progress.trackProgress.bind(this.progress));

        this.navList.button.addEventListener('click', this.navList.toggleNav.bind(this.navList));
        
        document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.preventDefault()));
    }
}

const init = new Init();