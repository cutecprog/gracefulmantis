var high = document.getElementById("top").getContext('2d');
var midhigh = document.getElementById("topmid").getContext('2d');

high.beginPath();
high.rect(200, 20, 20,20);
high.rect(400, 20, 20,20);
high.fillStyle='#FF7300';
high.fill();
midhigh.beginPath();
midhigh.rect(200, 20, 20,20);
midhigh.rect(400, 20, 20,20);
midhigh.fillStyle='#FF7300';
midhigh.fill();
