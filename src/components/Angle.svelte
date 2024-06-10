<script>
    import makeArc from "@scripts/angle.ts";
    const RADIUS = 100;
    const HEIGHT = 200;
    const WIDTH = 300;
    const ARC_RAD = 20;
    const LINE_COLOR = "#0f5bd6";
    const ARC_COLOR = "#ad0a0a";
    const LINE_WIDTH = "2";
    const ARC_WIDTH = "2";

    var angle1 = .5 * Math.PI + 1;
    var angle2 = Math.PI;
</script>

<div>
    <svg height={HEIGHT} width={WIDTH}>
        <path
            d={makeArc(
                WIDTH / 2,
                HEIGHT / 2,
                ARC_RAD,
                angle1,
                angle2,
            )}
            fill="none"
            stroke-width={ARC_WIDTH}
            stroke={ARC_COLOR}
        ></path>
        <line
            x1={WIDTH / 2}
            y1={HEIGHT / 2}
            x2={RADIUS * Math.cos(angle1) + WIDTH / 2}
            y2={RADIUS * Math.sin(angle1) + HEIGHT / 2}
            stroke-width={LINE_WIDTH}
            stroke={LINE_COLOR}
        />
        <line
            x1={WIDTH / 2}
            y1={HEIGHT / 2}
            x2={RADIUS * Math.cos(angle2) + WIDTH / 2}
            y2={RADIUS * Math.sin(angle2) + HEIGHT / 2}
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
