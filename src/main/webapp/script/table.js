var EMPTY = 0;
var FIRST = 1;
var SECOND = 2;
var BLACK = 3;

function initTable(table) {
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

function printTable(canvas, ctx) {
    drawBoard(canvas, ctx); 
    for (var i = 0; i < 24; i++) {
        var p = coords[i];
        if (table[i] == FIRST) {
            drawCircle(ctx, p.x, p.y, p.r, FIRST);
        } else if (table[i] == SECOND) {
            drawCircle(ctx, p.x, p.y, p.r, SECOND);
        }
    }
}
