
export function daysSince(): number {
    var now: any = new Date();
    return Math.floor(now / 8.64e7);
}

function polarToCart(centerX: number, centerY: number, radius: number, angleRad: number): { x: number, y: number } {
    return {
        x: centerX + (radius * Math.cos(angleRad)),
        y: centerY + (radius * Math.sin(angleRad))
    };
}

export default function makeArc(x: number, y: number, radius: number, angle1: number, angle2: number): string {
    const largeArc: boolean = angle1 < angle2;
    const startAngle: number = angle1 < angle2 ? angle1 : angle2;
    const endAngle: number = angle1 < angle2 ? angle2 : angle1;

    var start: { x: number, y: number } = polarToCart(x, y, radius, endAngle);
    var end: { x: number, y: number } = polarToCart(x, y, radius, startAngle);

    return [
        "M", start.x, start.y,
        "A", radius, radius, 0, (largeArc ? "1" : "0"), (angle1 > angle2 ? "0" : "1"), end.x, end.y
    ].join(" ");
}
