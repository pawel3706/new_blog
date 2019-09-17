class Responsivness {
    constructor(items) {
        this.list = items;
    }

    changeSpacerHeight() {
        this.list.forEach(item => {

            item.pin.style.width = '';

            if (item.duration > 0) {
                const imgSize = document.querySelector('.card img').getBoundingClientRect().width;
                // console.log(imgSize)
                item.pin.style.width = `${imgSize}px`;
            } else {
                item.pin.style.width = `${item.spacer.getBoundingClientRect().width}px`;
            }

            item.spacer.style.height = `${item.pin.getBoundingClientRect().height}px`;

            const element = item.starter.style.position === 'fixed' ? item.spacer : item.starter;

            const position = element.getBoundingClientRect().top + window.scrollY;

            item.starterPos = position;
        });
    }
}