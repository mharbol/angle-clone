<script>
    import makeArc from "@scripts/angle.ts";
    const RADIUS = 100;
    const HEIGHT = 200;
    const WIDTH = 300;
    const ARC_RAD = 20;
    const LINE_COLOR = "#DF6247";
    const ARC_COLOR = "#446688";
    const ARC_WIDTH = "2";

    var angle1 = 1;
    var angle2 = 2;
</script>

<div>
    <svg height="{HEIGHT}," width={WIDTH}>
        <path
            d={makeArc(
                WIDTH / 2,
                HEIGHT / 2,
                ARC_RAD,
                angle1,
                angle2,
                true
            )}
            fill="none"
            strokeWidth="2"
            stroke={ARC_COLOR}
        ></path>
        <line
            x1={WIDTH / 2}
            y1={HEIGHT / 2}
            x2={RADIUS * Math.cos(angle1) + WIDTH / 2}
            y2={RADIUS * Math.sin(angle1) + HEIGHT / 2}
            strokeWidth={ARC_WIDTH}
            stroke={LINE_COLOR}
        />
        <line
            x1={WIDTH / 2}
            y1={HEIGHT / 2}
            x2={RADIUS * Math.cos(angle2) + WIDTH / 2}
            y2={RADIUS * Math.sin(angle2) + HEIGHT / 2}
            strokeWidth={ARC_WIDTH}
            stroke={LINE_COLOR}
        />
        <circle
            cx={WIDTH / 2}
            cy={HEIGHT / 2}
            r={3}
            fill="black"
            stroke="white"
        />
    </svg>
</div>
