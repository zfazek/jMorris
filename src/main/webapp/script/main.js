var firstPlayerToMove = true;
var firstHand = 9;
var secondHand = 9;

// array[24] of Point
var coords = [];

// array[24] of pieces (EMPTY, FIRST, SECOND)
var table = [];

function readyFn() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var canvasOffset = $("#canvas").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;

    initTable(table);

    drawBoard(canvas, ctx);
    $("#coord").text("");
    $("#canvas").mousedown(function(e) { handleMouseDown(e); });

    function handleMouseDown(e){
        var mouseX = parseInt(e.clientX - offsetX);
        var mouseY = parseInt(e.clientY - offsetY);
        $("#coord").html("Down: "+ mouseX + " / " + mouseY);

        var idx = getIdxFromCoord(coords, mouseX, mouseY);
        $("#idx").text(idx);

        if (idx == -1)
            return;

        if (isLegal(idx) == false)
            return;

        $("#tmp").text(firstPlayerToMove);
        var p = coords[idx];
        if (firstPlayerToMove) {
            table[idx] = FIRST;
            firstHand--;
        }
        else {
            table[idx] = SECOND;
            secondHand--;
        }
        invertFirstPlayerToMove();
        printTable(canvas, ctx);

    }
}

function Point(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

function getIdxFromCoord(coords, mx, my) {
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
