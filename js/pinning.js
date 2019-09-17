class Pinning {
    constructor() {
        this.listenerStart = false;
        this.pinsList = [];

        this.pinsList.push(new Pin('.hero-body', 'body', 0));
    
        for (let i = 1; i < 8 ; i++) {
            this.pinsList.push(new Pin (`.card-pin${i}`, `.card-pin${i}`, Static.getRect('.nav', 'height'), 0));
        } 

        this.active = new ActiveCard();
        this.trackProgress = this.trackProgress.bind(this);
        this.active.checkCards = this.active.checkCards.bind(this.active);
    }

    unfixedCSS(elem = this.pinsList) {

        if (!this.listenerStart) {
            window.addEventListener('scroll', this.trackProgress);
            window.addEventListener('scroll', this.active.checkCards);
            this.listenerStart = true;
        } 

        elem.forEach(item => {
            Static.setCSS(item.pin, {
                position: item.inFlow ? 'relative' : 'absolute',
                top: '',
                left: ''
            });
            if (!item.inFlow) {
                Static.setCSS(item.spacer, {
                    position: item.inFlow ? 'relative' : 'absolute',
                    top: 0,
                    left: 0
                })
                if (item.currentEvent === 'after') {
                    Static.setCSS(item.pin, {
                        top: item.duration
                    });
                }
            } else {
                Static.setCSS(item.pin, {
                    width: '100%'
                });
                Static.setCSS(item.spacer, {
                    height: Static.getRect(item.pin, 'height')
                });
            }
        })
    }

    fixedCSS(elem) {
        elem.forEach(item => {

            const distance = Static.getRect(item.spacer, 'top') +  (window.scrollY - (item.starterPos - item.screenPoint));
            
            Static.setCSS(item.pin, {
                position: 'fixed',
                top: distance,
                left: Static.getRect(item.spacer, 'left'),
                width: item.inFlow ? Static.getCSS(item.spacer, 'width') : ''
            })
        })
    }

    resetCSS() {
        if (this.listenerStart) {
            window.removeEventListener('scroll', this.trackProgress);
            window.removeEventListener('scroll', this.active.checkCards);
            this.listenerStart = false;
        }

        const obj = {};
        const properties = ['position', 'top', 'left', 'width', 'height'];

        properties.forEach(key => {
            obj[key] = '';
        })

        this.pinsList.forEach(item => {
            Static.setCSS(item.pin, obj);
            Static.setCSS(item.spacer, obj);
        })
    }

    trackProgress() {

        this.pinsList.forEach(item => {

            const scrollDis = window.scrollY + item.screenPoint;

            const progress = item.duration === 0 ? scrollDis - item.starterPos : (scrollDis - item.starterPos) / item.duration;

            if (item.duration > 0 && progress < 0 || item.duration === 0 && progress < 1) {

                item.currentEvent = 'before';
                this.doUpdate(item);

            } else if (item.duration > 0 && progress >= 0 && progress < 1 || item.duration === 0 && progress >= 1) {
                
                item.currentEvent = 'during';
                this.doUpdate(item);

            } else if (item.duration > 0 && progress >= 1) {
                
                item.currentEvent = 'after';
                this.doUpdate(item);
                
            }
        })  
    }

    doUpdate(el) {
        if (el.currentEvent != el.prevEvent) {
            el.prevEvent = el.currentEvent;
            el.currentEvent === 'during' ? this.fixedCSS([el]) :
            this.unfixedCSS([el]);
        }
    } 
}