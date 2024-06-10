<script>
    import makeArc from "@scripts/angle.ts";
    import LfsrRand from "@scripts/lfsr-rand.js";
    const RADIUS = 100;
    const HEIGHT = 200;
    const WIDTH = 300;
    const ARC_RAD = 10;
    const LINE_COLOR = "#0f5bd6";
    const ARC_COLOR = "#ad0a0a";
    const LINE_WIDTH = "2";
    const ARC_WIDTH = "2";

    var now = new Date();
    var fullDaysSinceEpoch = Math.floor(now/8.64e7);
    var rand = new LfsrRand(fullDaysSinceEpoch + 16);
    var r1 = rand.randInt(0, 360);
    var r2 = rand.randInt(0, 360);
    var angle1rad = r1 / 180 * Math.PI;
    var angle2rad = r2 / 180 * Math.PI;
    const deltaAngleRad = (angle1rad >= angle2rad ? angle1rad - angle2rad : 2*Math.PI - (angle2rad - angle1rad))
</script>

<div>
    <svg height={HEIGHT} width={WIDTH}>
        <path
            d={makeArc(
                WIDTH / 2,
                HEIGHT / 2,
                ARC_RAD,
                angle1rad,
                angle2rad,
                deltaAngleRad > Math.PI
            )}
            fill="none"
            stroke-width={ARC_WIDTH}
            stroke={ARC_COLOR}
        ></path>
        <line
            x1={WIDTH / 2}
            y1={HEIGHT / 2}
            x2={RADIUS * Math.cos(angle1rad) + WIDTH / 2}
            y2={RADIUS * Math.sin(angle1rad) + HEIGHT / 2}
            stroke-width={LINE_WIDTH}
            stroke={LINE_COLOR}
        />
        <line
            x1={WIDTH / 2}
            y1={HEIGHT / 2}
            x2={RADIUS * Math.cos(angle2rad) + WIDTH / 2}
            y2={RADIUS * Math.sin(angle2rad) + HEIGHT / 2}
            stroke-width={LINE_WIDTH}
            stroke={LINE_COLOR}
        />
        <circle
            cx={WIDTH / 2}
            cy={HEIGHT / 2}
            r={3}
            fill="white"
            stroke="black"
        />
    </svg>
</div>
