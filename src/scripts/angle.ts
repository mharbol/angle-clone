export const RADIUS = 100;
export const HEIGHT = 200;
export const WIDTH = 300;
export const ARC_RAD = 10;
export const LINE_COLOR = "#0f5bd6";
export const ARC_COLOR = "#ad0a0a";
export const LINE_WIDTH = "2";
export const ARC_WIDTH = "2";
export const MINI_CIRCLE_FILL = "white";
export const MINI_CIRCLE_LINE = "black";
export const MINI_CIRCLE_RAD = "3";

function polarToCart(centerX: number, centerY: number, radius: number, angleRad: number): { x: number, y: number } {
    return {
        x: centerX + (radius * Math.cos(angleRad)),
        y: centerY + (radius * Math.sin(angleRad))
    };
}

export default function makeArc(x: number, y: number, radius: number, angle1: number, angle2: number, largeArc: boolean): string {
    const startAngle: number = angle1 < angle2 ? angle1 : angle2;
    const endAngle: number = angle1 < angle2 ? angle2 : angle1;

    var start: { x: number, y: number } = polarToCart(x, y, radius, endAngle);
    var end: { x: number, y: number } = polarToCart(x, y, radius, startAngle);

    return [
        "M", start.x, start.y,
        "A", radius, radius, 0, (largeArc ? "1" : "0"), (angle1 > angle2 ? "0" : "1"), end.x, end.y
    ].join(" ");
}
