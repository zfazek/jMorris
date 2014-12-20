var EMPTY = 0;
var FIRST = 1;
var SECOND = 2;
var BLACK = 3;
var LIGHT = 4;
var N_HAND = 2;

function initTable(deleteHistory) {
    table = [];
    if (deleteHistory)
        moveHistory = [];
    firstHand = N_HAND;
    secondHand = N_HAND;
    firstPlayerToMove = true;
    for (var i = 0; i < 24; i++) {
        table[table.length] = EMPTY;
    }
}

function getNofPieces(color) {
    var n = 0;
    for (var i = 0; i < 24; i++) {
        if (table[i] == color)
            n++;
    }
    return n;
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

function lightPossiblePositions(ctx, idx) {
    for (var i = 0; i < 24; i++) {
        if (table[i] == EMPTY) {
            var p = coords[i];
            drawCircle(ctx, p.x, p.y, p.r / 2, LIGHT);
        }
    }
}
