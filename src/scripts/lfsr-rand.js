export function fullDaysSinceEpoch() {
    return Math.floor(new Date().getMilliseconds() / 8.64e7);
}

class LfsrRand {
    constructor(seed) {
        this.state = seed;
    }

    nextInt() {
        this.state |= this.state == 0;
        this.state ^= (this.state & 0x0007ffff) << 13;
        this.state ^= this.state >> 17;
        this.state ^= (this.state & 0x07ffffff) << 5;
        return this.state & 0xffffffff;
    }

    randInt(start, end) {
        return start + Math.abs(this.nextInt()) % (end - start);
    }
}

export default LfsrRand;
