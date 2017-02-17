var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');
btn.onclick = function() {
    var code = input.value;
    para.textContent = code
}
var obj = { 'fname': 'naga', 'lastname': 'malli' };
var person = {
    name: ['Bob', 'Smith'],
    object: obj,
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};
person['age'] = 45;
person['fname'] = 'ram';
console.log('person=' + person['name'][0]);
console.log('person=' + person.age);
console.log('person=' + person.object.fname);
console.log('person:fname=' + person.fname);
person['bio']();
person.greeting();
var myNotification = new Notification('Hello!');
console.log('myNotification' + myNotification.this);
//generic object instasiation 
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
    return obj;
}
var salvan = createNewPerson('malli');
console.log('salvan.name' + salvan.name);
salvan.greeting();
//create object using Constructor function
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    if (gender === 'male') {
        this.bio = function() {
            alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        };
    } else {
        this.bio = function() {
            alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. She likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        };
    }

    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
};

var person1 = new Person('Bob', 'Smith', 32, 'female', ['music', 'skiing']);
person1.bio();
//adding a new function to exiting Person('') constructor function using prototype property.
Person.prototype.firewell = function() {
    alert('firewell===========================================');
};
person1.firewell();
//adiing fullName property to Person Constructor function uisng prototype property
Person.prototype.fullName = 'this.name.first' + ' | ' + 'this.name.last';
//Person.prototype.fullName = 'Bob Smith';
console.log('******************' + person1.fullName);


console.log(person1['interests'][0]);
var person5 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
person5.bio();
//create object instance using Object() Constructor
var person2 = new Object();
person2.age = 45;
person2.bio = function() {
    alert('Object Constructor');
}
person2.bio();

var person3 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
});

//create object instance wing create() method
var person4 = Object.create(person3);
var person6 = new person4.constructor({
    name: '========================',
    age: 38,
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
});

person6.greeting();
person4.greeting();
console.log('==============');
console.log(person4.__proto__);

//web api request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();
console.log(xhr.responseXML);
//console.log(xhr.responseText);
console.log(xhr.status);
console.log(xhr.statusText);

//===========================web===============================
var request = new XMLHttpRequest();
request.open("GET", "./path/client.xml", false);
request.send();
var xml = request.responseXML;
var users = xml.getElementsByTagName("user");
for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var names = user.getElementsByTagName("name");
    for (var j = 0; j < names.length; j++) {
        alert(names[j].childNodes[0].nodeValue);
    }
}