var EMPTY = 0;
var FIRST = 1;
var SECOND = 2;
var BLACK = 3;

function initTable() {
    table = [];
    firstHand = 9;
    secondHand = 9;
    firstPlayerToMove = true;
    for (var i = 0; i < 24; i++) {
        table[table.length] = EMPTY;
    }
}

function isLegal(idx) {
    if (table[idx] != EMPTY)
        return false;
    if (firstPlayerToMove && firstHand == 0)
        return false;
    if (firstPlayerToMove == false && secondHand == 0)
        return false;
}

function drawPieces(ctx) {
    for (var i = 0; i < 24; i++) {
        var p = coords[i];
        if (table[i] == FIRST) {
            drawCircle(ctx, p.x, p.y, p.r, FIRST);
        } else if (table[i] == SECOND) {
            drawCircle(ctx, p.x, p.y, p.r, SECOND);
        }
    }
}

function drawHands(canvas, ctx) {
    var padding = 2;
    var p = coords[0];
    for (var i = 0; i < firstHand; i++) {
        drawCircle(ctx, padding + p.r, padding + p.r * (i + 1), p.r, FIRST);
    }
    for (var i = 0; i < secondHand; i++) {
        drawCircle(ctx, canvas.width - p.r - padding, padding + p.r * (i + 1), p.r, SECOND);
    }
    if (firstPlayerToMove) {
        drawCircle(ctx, padding + p.r, canvas.height - padding - p.r, p.r, FIRST);
    } else {
        drawCircle(ctx, padding + p.r, canvas.height - padding - p.r, p.r, SECOND);
    }
}

function printTable(canvas, ctx) {
    drawBoard(canvas, ctx); 
    drawPieces(ctx);
    drawHands(canvas, ctx);
}
