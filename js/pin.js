class Pin {
    constructor(selector1, selector2, screenPoint, duration) {
        this.pin = document.querySelector(selector1);
        this.spacer = this.cerateSpacer();
        this.duration = duration === 'unknown' ? this.setDuration() : duration;
        this.screenPoint = typeof screenPoint === 'number' ? screenPoint : window.innerHeight * screenPoint.slice(0, -1);
        this.starter = document.querySelector(selector2);
        this.starterPos = this.starter.getBoundingClientRect().top + window.scrollY;
        this.setPinWidth();
    }

    setDuration() {
        return this.spacer.parentElement.getBoundingClientRect().height - this.pin.getBoundingClientRect().height;
    }
    
    cerateSpacer() {

        const spacer = this.pin.parentNode.insertBefore(document.createElement('div'), this.pin);

        spacer.style.height = `${this.pin.getBoundingClientRect().height}px`;

        spacer.appendChild(this.pin);
        spacer.classList.add('spacer');

        return spacer;
    }

    setPinWidth() {
        this.pin.style.width = this.duration > 0 ? window.getComputedStyle(this.pin).getPropertyValue('width') : `${this.spacer.getBoundingClientRect().width}px`;

        if (this.duration > 0) {
            this.spacer.style.position = 'absolute';
            this.spacer.style.top = 0;
            this.spacer.style.left = 0;
        }

        // important to change percent to px unit for position fixed elements
    }
}

