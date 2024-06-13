import LfsrRand, { fullDaysSinceEpoch } from "./lfsr-rand.js";

export default class AngleRand {
    constructor() {
        this.rand = new LfsrRand(fullDaysSinceEpoch());
    }

    randInfo() {
        const r1 = this.rand.randInt(0, 360);
        const r2 = this.rand.randInt(0, 360);
        const angle1rad = (r1 / 180) * Math.PI;
        const angle2rad = (r2 / 180) * Math.PI;
        const deltaAngleRad =
            angle1rad >= angle2rad
                ? angle1rad - angle2rad
                : 2 * Math.PI - (angle2rad - angle1rad);
        return {
            angle1: r1,
            angle2: r2,
            angle1rad: angle1rad,
            angle2rad: angle2rad,
            deltaAngleRad: deltaAngleRad,
        };
    }
}
