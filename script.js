$(document).ready(function(){

    const render = function(){
        $(".display").empty();
        
    }

    const bio = function(){
        $(".display").empty();
        let divEl = $("<div>").addClass("bioDiv");
        let h2El = $("<h2>").text("TEST PUT SOMETHING HERE");
        let imgEl = $("<img>").addClass("bioImg");
        $(imgEl).attr("src", "./Assets/Images/Headshot.png");
        $(imgEl).attr("rel", "Chris Enright");

        $(".display").append(divEl);
        $(divEl).append(imgEl);
        $(divEl).append(h2El);
    }

    render();
    bio();
});