    class Init {
        constructor() {

            this.navHeight = document.querySelector('.nav').getBoundingClientRect().height;

            this.elementsList = [];

            this.elementsList.push(new Pin('.hero-body', 'body', 0, 'unknown'));
            for (let i = 1; i < 8 ; i++) {
                this.elementsList.push(new Pin (`.card-pin${i}`, `.card-pin${i}`, this.navHeight, 0));
            }
            
            this.progress = new Progress(this.elementsList);
            
            this.activeCard = new ActiveCard();
            this.respo = new Responsivness(this.elementsList);
            this.navList = new NavList();

            this.screenW = window.innerWidth;

            this.progress.trackProgress = this.progress.trackProgress.bind(this.progress);

            this.activeCard.checkCards = this.activeCard.checkCards.bind(this.activeCard);

            if (this.screenW > 992) {
                window.addEventListener('scroll', this.progress.trackProgress);
                // in case of page reloading
                this.progress.trackProgress();

                window.addEventListener('scroll', this.activeCard.checkCards.bind(this.activeCard));
                // // in case of page reloading
                this.activeCard.checkCards();
            };

            
            window.addEventListener('resize', this.changePageDirection.bind(this));

            window.addEventListener('resize', this.respo.changeSpacerHeight.bind(this.respo));
    
            this.navList.button.addEventListener('click', this.navList.toggleNav.bind(this.navList));
            
            document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.preventDefault()));
        }

        changePageDirection() {
            const currentW = window.innerWidth;

            const change = this.screenW <= 992 ? currentW > 992 : currentW <= 992;

            if (change) {
                if (currentW <= 992) {
                    window.removeEventListener('scroll', this.progress.trackProgress);
                    
                    window.removeEventListener('scroll', this.activeCard.checkCards);

                    this.initialStyles();

                } else {
                    window.addEventListener('scroll', this.progress.trackProgress);

                    window.addEventListener('scroll', this.activeCard.checkCards);
                }
                this.screenW = window.innerWidth;
            }
        }

        initialStyles() {

            this.elementsList.forEach(item =>{
                item.pin.style.position = 'relative';
                item.pin.style.top = '';
                item.spacer.style.opacity = 1;
                if (item.duration > 0) {
                    item.spacer.style.paddingTop = 0;
                }
            })

        }
    }
    
    window.addEventListener('load', ()=> {
        const init = new Init();
    });
    
    
