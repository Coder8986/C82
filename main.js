var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
MouseEvent = "empty";
Color = "black";
var last_postion_of_X, last_postion_of_Y;
width_of_line = 1;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    Color = document.getElementById("Color").value;
    width_of_line = document.getElementById("width").value;
    MouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    MouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    var current_postion_of_mouse_X=e.clientX-canvas.offsetLeft;
    var current_postion_of_mouse_Y=e.clientY-canvas.offsetTop;
    if(MouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=Color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_postion_of_X, last_postion_of_Y);
        ctx.lineTo(current_postion_of_mouse_X, current_postion_of_mouse_Y);
        ctx.stroke();
    }
last_postion_of_X=current_postion_of_mouse_X;
last_postion_of_Y=current_postion_of_mouse_Y;
}
 function clearcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
 }

