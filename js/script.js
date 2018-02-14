
function fRandomNumbers(min,max){
    var random_number = Math.floor( Math.random() * ( max - min + 1 ) ) + min;   
    document.getElementById("random_number").innerHTML = random_number;
    console.log(random_number);
}

window.setInterval(function(){fRandomNumbers(1000, 5000)}, 2000);
