var bot = Math.floor(Math.random() * 3);
// if d is keeps being true then you have not choosen enything
var d = true;

myMusic = new sound("../470083__sheyvan__music-orchestral-victory-fanfare.wav");

var num = 1;
var scoreA = 0;
var scoreB = 0;
var round = 1;


// rock = 0 paper = 1 sisor = 2
function rock() {
    // random number between 0 and 2 
    bot = Math.floor(Math.random() * 3);
    var you = "../Image/rock_1faa8.png"

    // you = rock bot = sisor
    if(bot == 2){
        var win = "win";
        scoreA = scoreA + 1;

    // you = rock bot = paper
    } else if(bot == 1){
        var win = "lose";
        scoreB = scoreB + 1;

    // you = rock bot = rock
    } else {
        var win = "draw";
    }
    result(you, win);
    
}   
function paper() {
    // random number between 0 and 2 
    bot = Math.floor(Math.random() * 3);
    var you = "../Image/page-facing-up-emoji-by-twitter.png"
    // you = papir bot = rock
    if(bot == 0){
        var win = "win";
        scoreA = scoreA + 1;

    // you = papir bot = siccors
    } else if(bot == 2){
        var win = "lose";
        scoreB = scoreB + 1;

    // you = papir bot = papir
    } else {
        var win = "draw";
    }
    result(you, win);
    
}
function sisor() {
    // random number between 0 and 2 
    bot = Math.floor(Math.random() * 3);
    var you = "../Image/unnamed.png"

    if (timeLeft > 1) {
        bot = 0;
        win = "lose"
        scoreB = scoreB + 1;
        console.log("cheater bot rock")
    } else {
        // you = scissors bot = paper
        if(bot == 1){
            var win = "win";
            scoreA = scoreA + 1;

        // you = scissor bot = rock
        } else if(bot == 0){
            var win = "lose";
            scoreB = scoreB + 1;

        // you = scissor bot = scissor
        } else {
            var win = "draw";
        }
    }

    result(you, win);
    
}

// next round 
function Retry() {
    document.getElementById("startbutton").style.visibility = "visible";
    document.getElementById("thebuttons").style.visibility = "hidden";
    document.getElementById("clock").style.visibility = "hidden";
    document.getElementById("list").style.visibility = "hidden";
    document.getElementById("Retry").style.visibility = "hidden";
    round = round + 1

}

//start button
function starting() {
    document.getElementById("startbutton").style.visibility = "hidden";
    document.getElementById("thebuttons").style.visibility = "visible";
    document.getElementById("clock").style.visibility = "visible";
    document.getElementById("list").style.visibility = "hidden";
    document.getElementById("seconds").innerHTML = "3";


    //3 second conunt down
    timeLeft = 3;

    //countdown 
    function countdown() {
        timeLeft--;
        document.getElementById("seconds").innerHTML = String(timeLeft);
        if (timeLeft > 0) {
            setTimeout(countdown, 1000);
        }
        if (timeLeft == 0) {
            console.log(d)
            // if you havent clicked enny button then 
            if (d == true) {
                you = "../Image/artworks-000001576487-iijyhk-t500x500.jpg";
                bot = 3;
                win = "lose";
                scoreA = scoreA - 1;
                scoreB = scoreB - 1;
                result(you, win)
            }
	}
};

setTimeout(countdown, 1000);
};
// result is to add the information to a table and enter "answer"
function result(you, win) {
    //Runder
    document.getElementById("ro").innerHTML = "ROUND: " + round

    document.getElementById("clock").style.visibility = "hidden";   
    document.getElementById("list").style.visibility = "visible";
    document.getElementById("ro2").style.visibility = "visible";
    document.getElementById("Retry").style.visibility = "visible";
    document.getElementById("thebuttons").style.visibility = "hidden";

    console.log("score u: " + scoreA)
    console.log("score bot: " + scoreB)
    console.log("round: " + round)
    console.log("time: " + timeLeft)

        
    // if you are too fast you will lose automatically
    if (timeLeft > 1) {
        if (you == "../Image/rock_1faa8.png") {
            bot = 1;
            win = "lose"
            scoreB = scoreB + 1;
            console.log("cheater bot paper")
        } else if (you == "../Image/page-facing-up-emoji-by-twitter.png") {
            bot = 2;
            win = "lose"
            scoreB = scoreB + 1;
            console.log("cheater bot sisor")
        } else if (you == "../Image/unnamed.png") {
            bot = 0;
            win = "lose"
            scoreB = scoreB + 1;
            console.log("cheater bot rock")
        }
    }

    // takes the number in bot and asigne ether rock, paper or siccors
    if (bot == 0){
        boot = "../Image/rock_1faa8.png";
    } else if (bot == 1){
        boot = "../Image/page-facing-up-emoji-by-twitter.png";
    } else if (bot == 2){
        boot = "../Image/unnamed.png";
    } else {
        boot = "../Image/artworks-000001576487-iijyhk-t500x500.jpg";
    }
    d = false;
    
    // Find a <table> element with id="myTable":
    let table = document.getElementById("mytable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow(1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    // Add some text to the new cells:'
    cell0.innerHTML = num
    cell1.innerHTML = "<img src='" + boot + "' alt='' class='img2'>";
    cell2.innerHTML = "<img src='" + you + "' alt='' class='img2'>";
    cell3.innerHTML = "<img src='../Image/" + win + ".png' alt='' class='img2'>";
    
    num = num + 1;

    // shows whether you win or lose
    if (round == 3 && scoreA > scoreB) {
        document.getElementById("h3").innerHTML = "you f**king won";
        // game over
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("Retry").style.visibility = "hidden";
    } else if (round == 3 && scoreA < scoreB) {
        document.getElementById("h3").innerHTML = "you lost ... LOOOOSER!";
        // game over
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("Retry").style.visibility = "hidden";
    } else if (round == 3 && scoreA == scoreB) {
        document.getElementById("h3").innerHTML = "?";
        // game over
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("Retry").style.visibility = "hidden";
    }
    if (round == 2 && scoreA == 2) {
        document.getElementById("h3").innerHTML = "you f**king won";
        // game over
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("Retry").style.visibility = "hidden";
    } else if (round == 2 && scoreB == 2) {
        document.getElementById("h3").innerHTML = "you lost ... LOOOOSER!";
        // game over
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("Retry").style.visibility = "hidden";
    }
    myMusic.play();
}