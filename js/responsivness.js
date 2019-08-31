class Responsivness {
    constructor(items) {
        this.list = items;
    }

    changeSpacerHeight() {
        this.list.forEach(item => {
            item.pin.style.width = '';

            if (item.pin.classList.contains('hero-body')) {
                // console.log(window.getComputedStyle(item.pin).getPropertyValue('width'));
            };

            // item.pin.style.width = item.duration > 0 ? window.getComputedStyle(item.pin).getPropertyValue('width') : `${item.spacer.getBoundingClientRect().width}px`;
            item.pin.style.width = item.duration > 0 ? `${item.spacer.parentElement.getBoundingClientRect().width * 0.55}px` : `${item.spacer.getBoundingClientRect().width}px`;

            item.spacer.style.height = `${item.pin.getBoundingClientRect().height}px`;

            const element = item.starter.style.position === 'fixed' ? item.spacer : item.starter;

            const position = element.getBoundingClientRect().top + window.scrollY;

            item.starterPos = position;
        });
    }
}