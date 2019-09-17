class Pin {
    constructor(selector1, selector2, screenPoint, duration) {
        this.pin = document.querySelector(selector1);
        this.inFlow = window.getComputedStyle(this.pin).position != 'absolute';
        this.spacer = this.cerateSpacer();
        this.duration = duration === undefined ? this.setDuration() : duration;
        this.screenPoint = typeof screenPoint === 'number' ? screenPoint : window.innerHeight * screenPoint.slice(0, -1);
        this.starter = document.querySelector(selector2);
        this.starterPos = this.starter.getBoundingClientRect().top + window.scrollY;
        this.currentEvent = 'before';
        this.prevEvent = 'before';
    }

    setDuration() {
        return this.spacer.parentElement.getBoundingClientRect().height - this.pin.getBoundingClientRect().height;
    }
    
    cerateSpacer() {
        const spacer = this.pin.parentNode.insertBefore(document.createElement('div'), this.pin);
        spacer.appendChild(this.pin);
        spacer.classList.add('spacer');
        return spacer;
    }
}
