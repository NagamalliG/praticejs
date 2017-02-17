var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    var choice = select.value;

    switch (choice) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            para.textContent = 'default value..';
    }
}
var cheese = 'Cheddar';

if (cheese) {
    console.log('Yay! Cheese available for making cheese on toast.');
} else {
    console.log('No cheese on toast for you today.');
}

var abc = '';
if (abc) {
    console.log('if');
} else {
    console.log('esle');
}

var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
select.addEventListener('change', setColor);

function setColor() {
    (select.value === 'black') ? update('black', 'white'): update('white', 'black');
}


var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join();
console.log('madeAString' + madeAString);