var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    
    width=screen.width;
    new_width=width-70;
    new_height=screen.height-300;
    mouseEvent="empty";

    if (width < 992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        console.log("my touch start");

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
    {
        console.log("my touch move");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;

        color=document.getElementById("Color").value;
        lineWidth=document.getElementById("line_width").value;
    }

    function my_mousedown(e){
        mouseEvent="mousedown";
        color=document.getElementById("Color").value;
        lineWidth=document.getElementById("line_width").value;
        radius=document.getElementById("Radius").value;
        circle(current_pos_mouse_x,current_pos_mouse_y);
     }
     function my_mouseleave(e){
        mouseEvent="mouseleave";
     }
     function my_mouseup(e){
        mouseEvent="mouseup";
     }
canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e){

        if (mouseEvent=="mousedown"){
        console.log("Current position of x and y coordinates = ")        
        console.log("x = " + current_pos_mouse_x + "y = " + current_pos_mouse_y);
        color=document.getElementById("Color").value;
        lineWidth=document.getElementById("line_width").value;
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.beginPath();
        
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
        }
    }


function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}