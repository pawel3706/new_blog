class Static {

    static getCSS(elem, options) {
        if (typeof options  === 'string') {
            return window.getComputedStyle(elem)[options];
        } else if  (Array.isArray(options)) {
            const object = {};
            const elemCSS = window.getComputedStyle(elem);
            options.forEach(option => {
                object[option] = elemCSS[option];
            })
            return object  
        } else {
            throw new Error('options is not an array');
        }
    }
    
    static setCSS(elem, options) {
        if (typeof options === 'object') {
            for (const option in options) {
                let value = options[option];
                if (value == parseFloat(value)) {
                    value += 'px'
                }
                elem.style[option] = value;
            }
        } else {
            throw new Error('options is not an object');
        }
    }

    static getRect(elem, options) {
        if (typeof elem === 'string') {
            elem = this.getElem(elem);
        } 
        const rect = elem.getBoundingClientRect();
        return rect[options];
    }

    static getElem(selector) {
        if (typeof selector === 'string') {
            const elem =  document.querySelector(selector);
            if (elem === null) {
                throw new Error('invalid selector');
            }
            return elem;
        }
    }
}