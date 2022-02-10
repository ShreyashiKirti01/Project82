var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color=document.getElementById("color").value;
line_of_width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e){
mouseEvent="mousedown";
color=document.getElementById("color").value;
line_of_width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
}

canvas.addEventListener("mouseup", my_mouseUp)

function my_mouseUp(e){
mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e){
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;


if (mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_of_width;

ctx.arc(last_position_of_x, last_position_of_y, radius, 0, 2*Math.PI);
ctx.stroke();

}
last_position_of_x=current_position_x;
last_position_of_y=current_position_y;

}

function clearcanvas(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}