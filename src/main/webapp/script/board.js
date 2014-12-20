function drawBoard(canvas, ctx) {
    var width = canvas.width;
    var LWIDTH = 2;
    var GAP = 60;
    var OFFSET = 25;
    var RADIUS = 3;
    var PIECE_RADIUS = GAP / 3;

    fillCoords(width, OFFSET, GAP, PIECE_RADIUS);

    ctx.beginPath();
    ctx.lineWidth = LWIDTH;
    ctx.rect(OFFSET, OFFSET, width - 2 * OFFSET, width - 2 * OFFSET);
    ctx.rect(OFFSET + GAP, OFFSET + GAP, width - 2 * OFFSET - 2 * GAP, width - 2 * OFFSET - 2 * GAP);
    ctx.rect(OFFSET + 2 * GAP, OFFSET + 2 * GAP, width - 2 * OFFSET - 4 * GAP, width - 2 * OFFSET - 4 * GAP);
    ctx.moveTo(width / 2, OFFSET);
    ctx.lineTo(width / 2, OFFSET + 2 * GAP);
    ctx.moveTo(width / 2, width - OFFSET);
    ctx.lineTo(width / 2, width - OFFSET - 2 * GAP);
    ctx.moveTo(OFFSET, width / 2);
    ctx.lineTo(OFFSET + 2 * GAP, width / 2);
    ctx.moveTo(width - OFFSET, width / 2);
    ctx.lineTo(width - OFFSET - 2 * GAP, width / 2);
    ctx.stroke();

    drawCircle(ctx, OFFSET, OFFSET, RADIUS, BLACK);
    drawCircle(ctx, width / 2, OFFSET, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET, OFFSET, RADIUS, BLACK);

    drawCircle(ctx, OFFSET + GAP, OFFSET + GAP, RADIUS, BLACK);
    drawCircle(ctx, width / 2, OFFSET + GAP, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET - GAP, OFFSET + GAP, RADIUS, BLACK);

    drawCircle(ctx, OFFSET + 2 * GAP, OFFSET + 2 * GAP, RADIUS, BLACK);
    drawCircle(ctx, width / 2, OFFSET + 2 * GAP, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET - 2 * GAP, OFFSET + 2 * GAP, RADIUS, BLACK);

    drawCircle(ctx, OFFSET, width / 2, RADIUS, BLACK);
    drawCircle(ctx, OFFSET + GAP, width / 2, RADIUS, BLACK);
    drawCircle(ctx, OFFSET + 2 * GAP, width / 2, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET, width / 2, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET - GAP, width / 2, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET - 2 * GAP, width / 2, RADIUS, BLACK);

    drawCircle(ctx, OFFSET + 2 * GAP, width - OFFSET - 2 * GAP, RADIUS, BLACK);
    drawCircle(ctx, width / 2, width - OFFSET - 2 * GAP, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET - 2 * GAP, width - OFFSET - 2 * GAP, RADIUS, BLACK);

    drawCircle(ctx, OFFSET + GAP, width - OFFSET - GAP, RADIUS, BLACK);
    drawCircle(ctx, width / 2, width - OFFSET - GAP, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET - GAP, width - OFFSET - GAP, RADIUS, BLACK);

    drawCircle(ctx, OFFSET, width - OFFSET, RADIUS, BLACK);
    drawCircle(ctx, width / 2, width - OFFSET, RADIUS, BLACK);
    drawCircle(ctx, width - OFFSET, width - OFFSET, RADIUS, BLACK);
}

function drawCircle(ctx, x, y, radius, c) {
    var color;
    if (c == FIRST)
        color = "#FFFFFF";
    if (c == SECOND)
        color = "#222222";
    if (c == BLACK)
        color = "#000000";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function fillCoords(width, offset, gap, radius) {
    coords = [];
    var point = new Point(offset, offset, radius); coords[coords.length] = point;
    var point = new Point(width / 2, offset, radius); coords[coords.length] = point;
    var point = new Point(width - offset, offset, radius); coords[coords.length] = point;

    var point = new Point(offset + gap, offset + gap, radius); coords[coords.length] = point;
    var point = new Point(width / 2, offset + gap, radius); coords[coords.length] = point;
    var point = new Point(width - offset - gap, offset + gap, radius); coords[coords.length] = point;

    var point = new Point(offset + 2 * gap, offset + 2 * gap, radius); coords[coords.length] = point;
    var point = new Point(width / 2, offset + 2 * gap, radius); coords[coords.length] = point;
    var point = new Point(width - offset - 2 * gap, offset + 2 * gap, radius); coords[coords.length] = point;

    var point = new Point(offset, width / 2, radius); coords[coords.length] = point;
    var point = new Point(offset + gap, width / 2, radius); coords[coords.length] = point;
    var point = new Point(offset + 2 * gap, width / 2, radius); coords[coords.length] = point;
    var point = new Point(width - offset, width / 2, radius); coords[coords.length] = point;
    var point = new Point(width - offset - gap, width / 2, radius); coords[coords.length] = point;
    var point = new Point(width - offset - 2 * gap, width / 2, radius); coords[coords.length] = point;

    var point = new Point(offset + 2 * gap, width - offset - 2 * gap, radius); coords[coords.length] = point;
    var point = new Point(width / 2, width - offset - 2 * gap, radius); coords[coords.length] = point;
    var point = new Point(width - offset - 2 * gap, width - offset - 2 * gap, radius); coords[coords.length] = point;

    var point = new Point(offset + gap, width - offset - gap, radius); coords[coords.length] = point;
    var point = new Point(width / 2, width - offset - gap, radius); coords[coords.length] = point;
    var point = new Point(width - offset - gap, width - offset - gap, radius); coords[coords.length] = point;

    var point = new Point(offset, width - offset, radius); coords[coords.length] = point;
    var point = new Point(width / 2, width - offset, radius); coords[coords.length] = point;
    var point = new Point(width - offset, width - offset, radius); coords[coords.length] = point;
}

