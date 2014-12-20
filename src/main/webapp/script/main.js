var firstPlayerToMove = true;
var firstHand;
var secondHand;
var nofClick = 1;

// array[24] of Point
var coords = [];

// array[24] of pieces (EMPTY, FIRST, SECOND)
var table = [];

// history of Move
var moveHistory = [];

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

    if (nofClick == 1) {
        if ((firstPlayerToMove && firstHand > 0) || (firstPlayerToMove == false && secondHand > 0)) {
            if (table[idx] != EMPTY)
                return;
            move1(idx);
            valid = true;
        } else {
            if (firstPlayerToMove && table[idx] != FIRST)
                return;
            if (firstPlayerToMove == false && table[idx] != SECOND)
                return;
            lightPossiblePositions(e.data.ctx, idx);
            //nofClick = 2;
        }
    } else if (nofClick == 2) {
    } else if (nofClick == 3) {
    }
    if (valid) {
        invertFirstPlayerToMove();
        printTable(e.data.canvas, e.data.ctx);
        nofClick = 1;
    }
}

function move1(idx) {
    var p = coords[idx];
    var m = new Move(idx, 0, 0, 1, false)
        if (firstPlayerToMove) {
            table[idx] = FIRST;
            moveHistory[moveHistory.length] = m;
            firstHand--;
        }
        else {
            table[idx] = SECOND;
            moveHistory[moveHistory.length] = m;
            secondHand--;
        }
}

function handleButtonUndo(e) {
    if (moveHistory.length == 0)
        return;
    moveHistory.splice(moveHistory.length - 1, 1);
    initTable(false);
    for (var i = 0; i < moveHistory.length; i++) {
        if (firstPlayerToMove) {
            table[moveHistory[i].x] = FIRST;
            firstHand--;
        } else {
            table[moveHistory[i].x] = SECOND;
            secondHand--;
        }
        invertFirstPlayerToMove();
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

function invertFirstPlayerToMove() {
    firstPlayerToMove = firstPlayerToMove == false;
}

function handleButtonInitTable(e) {
    initTable(true);
    printTable(e.data.canvas, e.data.ctx);
}

function printTmp(str) {
    $("#tmp").html(str);
}
