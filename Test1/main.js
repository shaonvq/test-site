$("div").on("click",function(){
    if($(this).css("backgroundColor")=="rgb(0, 0, 255)")
    {
        $(this).animate({
            width: "10%",
            backgroundColor: "red"
        },1000)
    }
    else
    {
        $(this).animate({
            width: "90%",
            backgroundColor: "blue"
        },1000)
    }
})