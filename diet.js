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
document.getElementById('carbs').value = '0';
document.getElementById('protein').value = '0';
document.getElementById('fat').value = '0';
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
                /* carbs:   yellow
                   protein: magenta
                   fat:     cyan     */
                r  = carbs * 127 + protein * 127;
                g = carbs * 127 + fat * 127;
                b = protein * 127 + fat * 127;
                r = Math.round(r).toString(16);
                g = Math.round(g).toString(16);
                b = Math.round(b).toString(16);
                r = ('0' + r).substr(-2);
                g = ('0' + g).substr(-2);
                b = ('0' + b).substr(-2);
                document.getElementById('content').style.backgroundColor = 
                '#' + r+g+b;
}, 100);
