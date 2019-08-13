class Init {
    constructor() {

        this.navHeight = document.querySelector('.nav-full-width').getBoundingClientRect().height;

        this.pinElements = [
            new Pin ('.nav-full-width', '.nav-full-width', 0, 0),
            new Pin('.hero-body', 'body', 0, 'unknown'),
            new Pin('.card-pin1', '.card-pin1', this.navHeight, 0),
            new Pin('.card-pin2', '.card-pin2', this.navHeight, 0),
            new Pin('.card-pin3', '.card-pin3', this.navHeight, 0),new Pin('.card-pin4', '.card-pin4', this.navHeight, 0),new Pin('.card-pin5', '.card-pin5', this.navHeight, 0),new Pin('.card-pin6', '.card-pin6', this.navHeight, 0),new Pin('.card-pin7', '.card-pin7', this.navHeight, 0)
        ];

        this.progress = new Progress(this.pinElements);
        this.navList = new NavList();

        window.addEventListener('scroll', this.progress.trackProgress.bind(this.progress));

        window.addEventListener('resize', this.progress.changeSpacerHeight.bind(this.progress));

        this.navList.button.addEventListener('click', this.navList.toggleNav.bind(this.navList));
        
        document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.preventDefault()));

    }
}
console.log(document.querySelector('.nav-full-width').getBoundingClientRect().height)

const init = new Init();