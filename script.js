$(document).ready(function(){

    const render = function(){
        $(".display").empty();
        bio();
        
    }


    const bio = function(){
        $(".display").empty();
        let divEl = $("<div>").addClass("mainDiv");
        divEl.addClass("border border-white row");
        let imgEl = $("<img>").addClass("bioImg");
        let pEl = $("<p>").html("While contending with constantly competing priorities I have consistently succeeded at my job, and delivered fully realized projects.  I have a history of decreasing project costs, and increasing recurring revenue; I’ve had to do this with fewer resources, while maintaining multiple streams of work in parallel. <br><br> Throughout my career, I have succeeded at both collaborative development, and solo iteration.  I enjoy breaking down a complex project into its component parts and figuring out how to best accomplish the client’s needs. <br><br> As you consider my employment, know that you’re hiring an eminent professional who’s worked in small, and medium businesses, as well as corporate spaces, and can excel in any environment.  I have exceptional communication and interpersonal skills, finding it easy to mix with any group.  My employers have always found my ability to take a step back and see the bigger picture is an asset to any project that I’m working on. <br><br> I don’t have a specific job that I’m targeting yet, I think I would, primarily, like to be in a creative and collaborative environment.  An employer who cares about their staff and consistently demonstrates it would certainly help me make my decision. ");
        pEl.addClass("mainText");
     
        $(imgEl).attr("src", "./Assets/Images/Headshot.png");
        $(imgEl).attr("rel", "Chris Enright");

        $(".display").append(divEl);
        $(divEl).append(imgEl);
        $(divEl).append(pEl);
    }

    const contact = function(){
        $(".display").empty();
        console.log("clicked");
        let divEl = $("<div>").addClass("mainDiv");
        divEl.addClass("border border-white row");
        let h2El = $("<h2>").text("Reach out through:")
        // let ulEl = $("<ul>").addClass("contactList");
        // let liEl = $("<li>");
        let git = $('<a>').attr('href', 'https://github.com/enrightcw').html('</br>GitHub');
        let linkedIn = $("<a>").attr('href', 'https://www.linkedin.com/in/chris-enright-364291b/').html('</br></br>LinkedIn');
        let email = $("<a>").attr("href", 'mailto:enrightcw@gmail.com').html('</br></br></br>Email');


        $(".display").append(divEl);
        $(divEl).append(h2El);
        // $(divEl).append(git);
        // $(divEl).append(linkedIn);
        // $(divEl).append(email);
        $(divEl).append(git).append(linkedIn).append(email);
        $


    }

    $("#home").on("click", render);
    $("#contact").on("click", contact);

    render();
});