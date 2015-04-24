var caloriesPerGram = {
        'carbs':   4,
        'protein': 4,
        'fat':     9
};

var maxIntake = {
        'carbs':   0.65,
        'protein': 0.35,
        'fat':     0.35
};

document.getElementById('data').innerHTML = '<p>Fat: ' + caloriesPerGram.fat
                         + ' ' + maxIntake.fat + '</p>';

setInterval(function()
{
        document.getElementById('data').innerHTML = '<p>Fat: '
                + document.getElementById('fat').value + '</p>';
}, 100);
