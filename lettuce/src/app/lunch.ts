export class Lunch {
    constructor(public name: string, public time: number, public duration: number = 1, public color: string = "#EBF9D1") {

    }
    details = false;
    left() {
        return (100 / 4 * (this.time - 11)) + '%';
    }
    width() {
        return (100 / 4 * (this.duration)) + '%';
    }
}