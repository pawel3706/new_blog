class Progress {
    constructor(items) {
        this.list = items;
    }

    trackProgress() {
        this.list.forEach(item => {
       
            const scrollDis = window.scrollY + item.screenPoint;

            const progress = item.duration === 0 ? scrollDis - item.starterPos : (scrollDis - item.starterPos) / item.duration;
            console.log(progress);
        })
    }
}