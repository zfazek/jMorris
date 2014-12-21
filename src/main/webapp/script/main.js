var whiteToMove = true;
var whiteHand;
var blackHand;
var nofClick = 1;

// array[24] of Point
var coords = [];

// array[24] of pieces (EMPTY, WHITE, BLACK)
var table = [];

var mill = [];

// history of Move
var moveHistory = [];

// legal moves
var legalMoves = [];

function readyFn() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    $("#coord").text("");
    $("#canvas").mousedown({canvas: canvas, ctx: ctx}, handleMouseDown);
    $("#initTable").click({canvas: canvas, ctx: ctx}, handleButtonInitTable);
    $("#undo").click({canvas: canvas, ctx: ctx}, handleButtonUndo);

    startGame(canvas, ctx);
}

function startGame(canvas, ctx) {
    initTable(true);
    drawBoard(canvas, ctx);
    printTable(canvas, ctx);
}

function handleMouseDown(e){
    var canvasOffset = $("#canvas").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    var valid = false;
    var idx = getIdxFromCoord(mouseX, mouseY);
    if (idx == -1)
        return;

    legalMoves = [];
    legalMoves = getAllMoves();
    printTmp(legalMoves.length);
    
    if (nofClick == 1) {
        if ((whiteToMove && whiteHand > 0) || (whiteToMove == false && blackHand > 0)) {
            if (table[idx] != EMPTY)
                return;
            move1(idx);
            valid = true;
        } else {
            if (whiteToMove && table[idx] != WHITE)
                return;
            if (whiteToMove == false && table[idx] != BLACK)
                return;
            lightPossiblePositions(e.data.ctx, idx);
            //nofClick = 2;
        }
    } else if (nofClick == 2) {
    } else if (nofClick == 3) {
    }
    if (valid) {
        invertWhitePlayerToMove();
        printTable(e.data.canvas, e.data.ctx);
        nofClick = 1;
    }
}

function move1(idx) {
    var p = coords[idx];
    var m = new Move(idx, 0, 0, 1, false)
        if (whiteToMove) {
            table[idx] = WHITE;
            moveHistory[moveHistory.length] = m;
            whiteHand--;
        }
        else {
            table[idx] = BLACK;
            moveHistory[moveHistory.length] = m;
            blackHand--;
        }
}

function handleButtonUndo(e) {
    if (moveHistory.length == 0)
        return;
    moveHistory.splice(moveHistory.length - 1, 1);
    initTable(false);
    for (var i = 0; i < moveHistory.length; i++) {
        if (whiteToMove) {
            table[moveHistory[i].x] = WHITE;
            whiteHand--;
        } else {
            table[moveHistory[i].x] = BLACK;
            blackHand--;
        }
        invertWhitePlayerToMove();
    }
    printTable(e.data.canvas, e.data.ctx);
}

function Point(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

function Move(x, y, z, l, c) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.length = l;
    this.capture = c;
}

function getIdxFromCoord(mx, my) {
    for (var i = 0; i < coords.length; i++) {
        var p = coords[i];
        if (Math.abs(mx - p.x) < p.r && Math.abs(my - p.y) < p.r)
            return i;
    }
    return -1;
}

function invertWhitePlayerToMove() {
    whiteToMove = whiteToMove == false;
}

function handleButtonInitTable(e) {
    initTable(true);
    printTable(e.data.canvas, e.data.ctx);
}

function printTmp(str) {
    $("#tmp").html(str);
}
