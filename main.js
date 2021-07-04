var mouseEvent = "Empty";


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "Cyan";
width = "4";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown";

} 

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {

    mouseEvent = "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_mouse_x , current_position_mouse_y , 40 , 0 , 2*Math.PI);
        ctx.stroke();
    }

    
}
function cleararea() {
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}

