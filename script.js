let pointsButton = document.querySelector(".points-button");
let blocksButton = document.querySelector(".blocks-button");

pointsButton.onclick = (function() {
    let pointsInput = document.querySelector(".points").value;

    if (pointsInput === "Lebron") {
        document.querySelector(".points-message").innerHTML = "correct!";
        document.querySelector(".points-message").style.color = "green";
    } else if (pointsInput === "lebron") {
        document.querySelector(".points-message").innerHTML = "Dont disrespect Lebron";
    } else if (pointsInput === "Kareem Abdul Jabbar" || pointsInput === "kareem" || pointsInput === "Kareem") {
        document.querySelector(".points-message").innerHTML = "Not anymore🤣🫵";
    } else {
        document.querySelector(".points-message").innerHTML = "wrong answer!";
        document.querySelector(".points-message").style.color = "red";

    }

});
blocksButton.onclick = (function() {
    let blocksInput = document.querySelector(".blocks").value;

    if (blocksInput === "Wembanyama") {
        document.querySelector(".blocks-message").innerHTML = "correct!";
        document.querySelector(".blocks-message").style.color = "green";
    } else if (blocksInput === "Wemby") {
        document.querySelector(".blocks-message").innerHTML = "That works too";
    } else if (blocksInput === "wemby" || blocksInput === "wembanyama") {
        document.querySelector(".blocks-message").innerHTML = "No, fix it";
    } else {
        document.querySelector(".blocks-message").innerHTML = "wrong answer!";
        document.querySelector(".blocks-message").style.color = "red";

    }
});