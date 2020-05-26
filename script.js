$(document).ready(function(){

    const render = function(){
        $(".display").empty();
        
    }

    const bio = function(){
        $(".display").empty();
        let divEl = $("<div>").addClass("mainDiv");
        divEl.addClass("border border-white row");
        let imgEl = $("<img>").addClass("bioImg");
        let h2El = $("<h2>").text("While contending with constantly competing priorities I’ve succeeded at my job, and delivered fully realized projects.  I have a history of decreasing project costs, and increasing recurring revenue; I’ve had to do this with fewer resources, while maintaining multiple streams of work in parallel.");
        h2El.addClass("mainText");
     
        $(imgEl).attr("src", "./Assets/Images/Headshot.png");
        $(imgEl).attr("rel", "Chris Enright");

        $(".display").append(divEl);
        $(divEl).append(imgEl);
        $(divEl).append(h2El);
    }

    render();
    bio();
});