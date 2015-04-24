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

var minIntake = {
        'carbs':   0.45,
        'protein': 0.10,
        'fat':     0.20
};

var carbs, protein, fat, cal;
var r,g,b, rs, gs, bs;
document.getElementById('carbs').value = '0';
document.getElementById('protein').value = '0';
document.getElementById('fat').value = '0';
document.getElementById('cal').value = '2400';

document.getElementById('data').innerHTML = '<p>Fat: ' + caloriesPerGram.fat
                         + ' ' + maxIntake.fat + '</p>';

function blurColors(c1, c2)
{
        return Math.sqrt((Math.pow(c1,2) + Math.pow(c2,2))/2);
}

setInterval(function()
{
                carbs   = parseFloat(document.getElementById('carbs').value);
                protein = parseFloat(document.getElementById('protein').value);
                fat     = parseFloat(document.getElementById('fat').value);
                cal     = parseFloat(document.getElementById('cal').value);
                carbs   = (carbs * caloriesPerGram.carbs / cal);
                protein = (protein * caloriesPerGram.protein / cal);
                fat     = (fat * caloriesPerGram.fat / cal);
                document.getElementById('data').innerHTML = 
                        '<p>'+carbs+' '+protein+' '+fat+'</p>';
                carbs   -= (minIntake.carbs);
                protein -= (minIntake.protein);
                fat     -= (minIntake.fat);
                carbs   /= (maxIntake.carbs - minIntake.carbs);
                protein /= (maxIntake.protein - minIntake.protein);
                fat     /= (maxIntake.fat - minIntake.fat);
                r = carbs;
                g = protein;
                b = fat;
                r *= 256;
                g *= 256;
                b *= 256;
                /* carbs:   yellow
                   protein: magenta
                   fat:     cyan     
                r  = Math.sqrt((Math.pow(carbs,2) + Math.pow(protein,2))/2);
                g = Math.sqrt((Math.pow(carbs,2) + Math.pow(fat,2))/2);
                b = Math.sqrt((Math.pow(protein,2) + Math.pow(fat,2))/2);*/
                r = (r > 255) ? 255 : (r < 0) ? 0 : r;
                g = (g > 255) ? 255 : (g < 0) ? 0 : g;
                b = (b > 255) ? 255 : (b < 0) ? 0 : b;
                rs = blurColors(r, 0);
                gs = blurColors(g, 0);
                bs = blurColors(b, 0);
                r = Math.round(r).toString(16);
                g = Math.round(g).toString(16);
                b = Math.round(b).toString(16);
                r = ('0' + r).substr(-2);
                g = ('0' + g).substr(-2);
                b = ('0' + b).substr(-2);
                rs = (rs > 255) ? 255 : (rs < 0) ? 0 : rs;
                gs = (gs > 255) ? 255 : (gs < 0) ? 0 : gs;
                bs = (bs > 255) ? 255 : (bs < 0) ? 0 : bs;
                rs = Math.round(rs).toString(16);
                gs = Math.round(gs).toString(16);
                bs = Math.round(bs).toString(16);
                rs = ('0' + rs).substr(-2);
                gs = ('0' + gs).substr(-2);
                bs = ('0' + bs).substr(-2);
                document.getElementById('content').style.backgroundColor = 
                                '#' + r+g+b;
                document.getElementById('content').style.boxShadow = 
                                '0 0 30px #'+rs+gs+bs;
}, 100);
