    class Init {
        constructor() {
    
            this.navHeight = document.querySelector('.nav').getBoundingClientRect().height;

            this.pinElements = [
                new Pin('.hero-body', 'body', 0, 'unknown'),
                new Pin('.card-pin1', '.card-pin1', this.navHeight, 0),
                new Pin('.card-pin2', '.card-pin2', this.navHeight, 0),
                new Pin('.card-pin3', '.card-pin3', this.navHeight, 0),
                new Pin('.card-pin4', '.card-pin4', this.navHeight, 0),
                new Pin('.card-pin5', '.card-pin5', this.navHeight, 0),
                new Pin('.card-pin6', '.card-pin6', this.navHeight, 0),
                new Pin('.card-pin7', '.card-pin7', this.navHeight, 0)
            ];
            
            this.progress = new Progress(this.pinElements);
            this.activeCard = new ActiveCard();
            this.responsivness = new Responsivness(this.pinElements);
            this.navList = new NavList();

            this.progress.trackProgress();
    
            window.addEventListener('scroll', this.progress.trackProgress.bind(this.progress));

            window.addEventListener('scroll', this.activeCard.checkCards.bind(this.activeCard));

            window.addEventListener('resize', this.responsivness.changeSpacerHeight.bind(this.responsivness));
    
            this.navList.button.addEventListener('click', this.navList.toggleNav.bind(this.navList));
            
            document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.preventDefault()));
        }
    }
    
    window.addEventListener('load', ()=> {
        const init = new Init();
    });
    
    
