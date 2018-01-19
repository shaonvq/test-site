function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var colors = document.querySelectorAll(".color");
var specialcolor = colors[getRandomInt(0,6)];
var gameover = false;
function init(){
    //array of color elements
    //radomize all colors
    for(var i = 0;i<colors.length;i++)
    {
        var color = "rgb(" + getRandomInt(0,256) + " ," + getRandomInt(0,256) + " ," + getRandomInt(0,256) + ")";
        colors[i].style.background = color;
        colors[i].addEventListener("click",lose);
        colors[i].removeEventListener("click",win);
    }
    specialcolor = colors[getRandomInt(0,6)];
    document.querySelector(".rgb").textContent = specialcolor.style.background;
    document.querySelector(".rgb").textContent = specialcolor.style.background;
    specialcolor.addEventListener("click",win);
    gameover = false;
    document.querySelector(".helper").textContent = "Choose a color";
}
//function called when won
function win(){
    for(var i = 0;i<colors.length;i++)
    {
        colors[i].style.background = specialcolor.style.background;
    }
    document.querySelector(".header").style.background = specialcolor.style.background;
    for(var i = 0;i<2;i++)
    {
        document.querySelectorAll("span")[i].style.color = specialcolor.style.background;
    }
    document.querySelector(".helper").textContent = "Winner";
    gameover = true;
}

//function called when lost
function lose(){
    if(gameover === true)
    {
        return -1;
    }
    if(this === specialcolor)
    {
        return -1;
    }
    this.style.background = "#1e1e1e";
    document.querySelector(".helper").textContent = "Try again"
}

//initial function call
init();
document.querySelector(".rgb").textContent = specialcolor.style.background;
specialcolor.addEventListener("click",win);
document.querySelector(".retry").addEventListener("click",init);
