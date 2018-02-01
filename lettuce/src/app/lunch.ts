export class Lunch {
    constructor(public name: string, public time: number, public duration: number = 1, public color: string) {

    }
    left() {
        return (100 / 4 * (this.time - 11)) + '%';
    }
    width() {
        return (100 / 4 * (this.duration)) + '%';
    }
}