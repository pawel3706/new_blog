class ActiveCard {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.body = document.querySelector('body');
        this.hero = document.querySelector('.hero-body');
        this.heroContainer = document.querySelector('.hero');
        this.cards = document.querySelectorAll('.card');
        this.heroBottom = this.hero.getBoundingClientRect().bottom + window.scrollY;

        this.list = [this.hero, ...this.cards];
        // console.log(this.list);
    }
    checkCards() {
        this.list.forEach(item => {

            const progress = this.getProgress(item);

            const elementWithClass = item === this.hero ? this.heroContainer : item;

            if(progress >= 0) {
                elementWithClass.classList.add('active');
            }

            const lastItem = item.classList.contains('card-pin8');

            const condition = lastItem ? progress <= 0 : progress >= 1 || progress <= 0;

            if (condition) {
                elementWithClass.classList.remove('active');
            }
        })
    }
    
    getProgress(element) {

        const rect = element.getBoundingClientRect();
        let starterPos;
        let duration;
        let screenPoint;

        if (element === this.hero) {
            starterPos = this.body.getBoundingClientRect().top + scrollY;
            duration = this.heroContainer.getBoundingClientRect().height - rect.height;
            screenPoint = 0;
        } else if (element.classList.contains('card-pin1')) {
            starterPos = rect.top + window.scrollY;
            duration = this.heroBottom - this.nav.getBoundingClientRect().height;
            screenPoint = this.heroBottom

        } else {
            starterPos = rect.top + window.scrollY;
            duration = rect.height;
            screenPoint = rect.height + this.nav.getBoundingClientRect().height;
        }

        const scrollDis =  window.scrollY + screenPoint;

        const result = (scrollDis - starterPos) / duration;

        return result;
    }
}