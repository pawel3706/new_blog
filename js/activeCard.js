class ActiveCard {
    constructor() {
        this.cards = document.querySelectorAll('.main-content > .spacer:not(.hero)');
        this.lastCard = document.querySelector('.card-pin8');

        this.list = [...this.cards, this.lastCard];

        this.progressCard = document.querySelector('.card');
    }
    checkCards() {
        this.list.forEach((card, index) => {
            const prev = card.previousElementSibling;
            const next = card.nextElementSibling;

            const trio = [prev, card, next];
            const copyList = this.list.slice();

            trio.forEach(item => {
                const index = copyList.indexOf(item);
                copyList.splice(index, 1);
            })

            const progress = this.getProgress(card);

            if(progress >= 0) {
                card.firstElementChild.classList.add('active');
                card.style.opacity = 1;
                prev.style.opacity = 1 - progress;
                next.style.opacity = progress;
                copyList.forEach(item => {
                    item.style.opacity = 0;
                })
            }
            if (progress > 1 || progress < 0) {
                card.firstElementChild.classList.remove('active');
            }
        })
    }

    getProgress(element) {

        const rect = element.getBoundingClientRect();
        const cardTop = rect.top + window.scrollY;

        const duration = rect.height;

        const scrollDis = window.scrollY + window.innerHeight/2;

        const result = (scrollDis - cardTop) / duration;

        return result;
    }
}