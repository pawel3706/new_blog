class Pin {
    constructor(selector1, selector2, screenPoint, duration, pushFollowers) {
        this.pin = document.querySelector(selector1);
        this.spacer = this.cerateSpacer();
        this.screenPoint = window.innerHeight * screenPoint;
        this.starter = document.querySelector(selector2);
        this.starterPos = this.starter.getBoundingClientRect().top + window.scrollY;
        this.duration = duration;
        this.pushFollowers = pushFollowers;
    }

    cerateSpacer() {
        const pinParent = this.pin.parentNode.insertBefore(document.createElement('div'), this.pin);
        pinParent.appendChild(this.pin);
        pinParent.classList.add('spacer');
        return pinParent;
    }
}

const dimension = (selector) => {
    return document.querySelector(selector).getBoundingClientRect().height;
}
const element1 = dimension('.hero');
const element2 = dimension('.hero-body');
const style = getComputedStyle(document.querySelector('.hero-body'))
let distance = style.top;
distance = distance.slice(0, distance.length - 2);

const duration = element1 - element2 - distance;
