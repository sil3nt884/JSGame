let canvas  = document.getElementById("game");
let x=0,y=0;
let speed = 10;

run();


function render(){
    canvas.style="border:1px solid #c3c3c3;";
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0, 600,400);
    ctx.fillStyle = "#ff111b";
    ctx.fillRect(x,y, 50,50);
}
window.addEventListener('keydown' ,(event)=>{
    console.log(event.code +" "+ y)
    let key = event.code;
    if(key=='KeyS'){
        y+=speed;
    }
    if(key=='KeyA'){
        x-=speed;
    }

    if(key=='KeyD'){
        x+=speed;
    }
    if(key=='KeyW') {
        y-=speed;
    }
    setInterval(render(),1);
}, false);


function run() {
    render();
}



