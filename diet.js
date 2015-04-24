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
var carbs, protein, fat, cal;
document.getElementById('cal').value = '2400';

document.getElementById('data').innerHTML = '<p>Fat: ' + caloriesPerGram.fat
                         + ' ' + maxIntake.fat + '</p>';

setInterval(function()
{
                carbs   = parseFloat(document.getElementById('carbs').value);
                protein = parseFloat(document.getElementById('protein').value);
                fat     = parseFloat(document.getElementById('fat').value);
                cal     = parseFloat(document.getElementById('cal').value);
                carbs   = (carbs * caloriesPerGram.carbs / cal);
                protein = (protein * caloriesPerGram.protein / cal);
                fat     = (fat * caloriesPerGram.fat / cal);
                carbs   /= (maxIntake.carbs);
                protein /= (maxIntake.protein);
                fat     /= (maxIntake.fat);
                carbs   = Math.round(carbs * 255)
                protein = Math.round(protein * 255)
                fat     = Math.round(fat * 255)
                document.getElementById('data').innerHTML = '<p>' + carbs
                        + ' ' + protein + ' ' + fat + '</p>';
}, 100);
