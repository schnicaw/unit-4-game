
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
            "https://www.sarahelizabethtodd.com/wp-content/uploads/2016/11/shutterstock_105784286.jpg",
            "https://vignette.wikia.nocookie.net/starwars/images/4/42/Book_of_Sith_Crystal.png/revision/latest?cb=20151012062446",
            "https://images-na.ssl-images-amazon.com/images/I/51snWRfynML._US500_.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84t1ObpMCFiOD74Y3t36F4Ibyn-VvbjTdcQDPiuAuXvWo__Uq",

 ];

random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html("Random Number: " + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })
        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: ", + previous);
}


resetAndStart();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    if(previous > random_result){
        lost++;
        $("#lost").html("Losses: " + lost);

        previous = 0;

        resetAndStart();

    }

    else if(previous === random_result){

        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();

    }

})