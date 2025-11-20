let speed = Number(prompt("Enter speed level (1-1000): "))
let dvd = document.getElementById("myCanvas")
    let ctx = dvd.getContext("2d")
    let x = 0 //max is 137
    let y = 22 // max is 100
    let directionx = 1
    let directiony = 1
    let color = ["red","orange","yellow","green","blue","indigo","violet"]
    let index = 0
    
    ctx.font = "30px Arial";
    ctx.fillStyle = getColor();
    // ctx.strokeText("DVD", 137, 100);
    ctx.fillText("DVD", 0, 22);
    // ctx.strokeText("DVD", 137, 100);
    ctx.stroke();
    
    function getColor(){
        index++
        if(index == 7){
            index =  0
        }else{
            index
        }
        return index
    }
    function updateX(){
        x+= directionx
        if(x>137){
            x = 136
            directionx = -1
            ctx.fillStyle = color[getColor()];
        }else if(x<0){
            x = 1
            directionx = 1
            ctx.fillStyle = color[getColor()];
        }
    }
    function updateY(){
        y+= directiony
        if(y>100){
            y = 99
            directiony = -1
            ctx.fillStyle = color[getColor()];
        }else if(y<22){
            y = 23
            directiony = 1
            ctx.fillStyle = color[getColor()];
        }
    }

    setInterval(function() {
        ctx.clearRect(0,0,200,100)
        updateX()
        updateY()
        ctx.fillText("DVD", x, y);
        if((x==0 && y==22) || (x==0 & y==100) || (x==137 && y==0) || (x==137 && y == 100)){
            document.getElementById("applaud").play()
        }    
        
    }, speed);