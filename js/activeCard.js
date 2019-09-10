class ActiveCard {
    constructor() {

        const navHeight = document.querySelector('nav').getBoundingClientRect().height;

        function HeroSection() {
            this.element = document.querySelector('.hero-body');
            this.activeElement = document.querySelector('.hero')
            this.starterPos = document.querySelector('body').getBoundingClientRect().top + window.scrollY;
            this.duration = this.activeElement.getBoundingClientRect().height - this.element.getBoundingClientRect().height;
            this.screenPoint = 0;
        }

        function FirstCard() {
            this.element = document.querySelector('.card-pin1');
            this.activeElement = this.element;
            this.starterPos = this.element.getBoundingClientRect().top + window.scrollY;
            this.heroElementBottom = document.querySelector('.hero-body').getBoundingClientRect().bottom + window.scrollY;
            this.duration = this.heroElementBottom - navHeight;
            this.screenPoint = this.heroElementBottom;
        }

        function OtherCards(selector) {
            this.element = document.querySelector(selector);
            this.elementHeight = this.element.getBoundingClientRect().height;
            this.activeElement = this.element;
            this.starterPos = this.element.getBoundingClientRect().top + window.scrollY;
            this.duration = this.elementHeight;
            this.screenPoint = this.elementHeight + navHeight;
        }

        this.list = [new HeroSection, new FirstCard];

        for (let i = 2; i < 9; i++) {
            this.list.push(new OtherCards(`.card-pin${i}`));
        }
    }
    
    checkCards() {
        this.list.forEach(item => {

            const scrollDis =  window.scrollY + item.screenPoint;
            const progress = (scrollDis - item.starterPos) / item.duration;

            if(progress > 0 && progress < 1) {
                item.activeElement.classList.add('active');
            }

            const lastItem = this.list[this.list.length - 1].element;

            const condition = item.element === lastItem ? progress <= 0 : progress >= 1 || progress <= 0;

            if (condition) {
                item.activeElement.classList.remove('active');
            }
        })
    }
}
