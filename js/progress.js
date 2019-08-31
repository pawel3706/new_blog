class Progress {
    constructor(items) {
        this.list = items;
    }

    trackProgress() {

        this.list.forEach(item => {

            const scrollDis = window.scrollY + item.screenPoint;

            const progress = item.duration === 0 ? scrollDis - item.starterPos : (scrollDis - item.starterPos) / item.duration;

            const distance = item.spacer.getBoundingClientRect().top + (window.scrollY - (item.starterPos - item.screenPoint));

            const active = item.duration > 0 ? progress >= 0 : progress >= 1;
            
            const disabled = item.duration > 0 ? progress < 0 || progress > 1 : progress < 1;

            if (active) {
                item.pin.style.position = 'fixed';
                item.pin.style.top = `${distance}px`;
                
                if (item.duration > 0) {
                    item.spacer.style.paddingTop = '';
                }
            }; 
            if (disabled) {
                item.pin.style.position = 'relative';
                item.pin.style.top = '';

                if (progress >= 1) {
                    item.spacer.style.paddingTop = `${item.duration}px`;
                } 
            }
        })
        
    }
}

