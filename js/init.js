    class Init {
        constructor() {

            new Static();
            this.nav = new Nav();
            this.pinning = new Pinning();

            window.addEventListener('resize', this.checkScreenResolution.bind(this));
            this.nav.button.addEventListener('click', this.nav.toggleNav.bind(this.nav));
            document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.preventDefault()));

            this.pinningStart = false;
            this.startPinning();
            
        }

        startPinning() {
            if (window.innerWidth > 992) {
                this.pinning.unfixedCSS();
                this.pinningStart = true;
            } 
        }

        checkScreenResolution() {
            if (window.innerWidth < 992 && this.pinningStart === true) {
                this.pinning.resetCSS();
                this.pinningStart = false;
            } else if (window.innerWidth > 992 && this.pinningStart === false) {
                this.startPinning();
            }
        }
    }
    
    window.addEventListener('load', ()=> {
        const init = new Init();
    });
