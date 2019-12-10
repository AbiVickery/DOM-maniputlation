// var itemOne = document.getElementById('one');
// itemOne.classList.add('foo');
// itemOne.style.color = 'red';
// itemOne.innerText = 'hello';
// var temp2 = itemOne.innerText;
// console.log(temp2);
// var foo3 = document.querySelector('li.foo');
// console.log(foo3);

// var foo4 = document.getElementsByClassName('foo');
// console.log(foo4);
// // foo4.foreach(function(el){
// //     console.log(el);
// // });

// var foo5 = document.getElementsByTagName('li');
// console.log(foo5);
// console.log(foo5.item(1));

// var foo6 = document.querySelectorAll('.foo');
// console.log(foo6);
// console.log(foo6.item(1));

// console.log(foo3.parentNode);
// console.log(foo3.previousSibling);
// console.log(foo3.nextSibling);

// var output = document.getElementById('output');
// for (let i = 0; i < 5; i++) {
//     let el = document.createElement('li');
//     el.innerText = 'This is element: $(i)';
//     output.appendChild(el);
// }

// var button = document.querySelector('.button');
// button.addEventListener('click', function (event) {
//     let button = event.target;
//     if (button.getAttribute('data-char') == 'x') {
//         console.log('times');
//     }
// });

// var username = document.getElementById('username');
// username.addEventListener('blur', function () {
//     console.log('hello');
// });

// var links = document.querySelectorAll('.links a');

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', fun (event) {
//         event.preventDefault();
//         console.log('hello ' + (i + 1));
//     });
// }


// var links = document.querySelectorAll('.links a');
// // console.log(links);

// links[0].addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('Hello 1');
// });
// links[1].addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('hello 2');
// });
// links[2].addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('hello 3');
// });


// var links = document.querySelectorAll('.links a');
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function(event) {
//         event.preventDefault();
//         var confirm = window.confirm('Do you wish to leave?');
//         if (confirm) {
//             var href = event.target.getAttribute('href');
//             window.location = href;
//         } else {
//             console.log('No I wish to stay!');
//         }
        
//     });
// }

// DOM
let output = document.getElementById('output');
console.log(output);
// output.innerText = 'Hello World!';
output.innerHTML = '<h1><span>Hello World!</span></h1>';
// debugger

// let hello = output.innerHTML;
hello = output.innerHTML;
output.innerText = 'Foo';
console.log(hello);

// ~~~~~~~~~~~~~~~~~~~~~~~

let tagName = document.getElementsByTagName('li');
console.log(tagName);

let className = document.getElementsByClassName('item');
console.log(className);

let querySelectorAll = document.querySelectorAll('.item');
console.log(querySelectorAll);

const food = ['Beer', 'Pizza', 'Bread'];
for (const listItem of querySelectorAll) {
    console.log(listItem); // ???
    listItem.addEventListener('click', cart);
}

function changeColor() {
    this.style.color = 'red';
}

function cart(item) {
    console.log(food[item]);
}

const food = ['Beer', 'Pizza', 'Bread'];
// LOOP TO ADD EVENT LISTENER
for (const listItem of querySelectorAll) {
    console.log(listItem);
    listItem.addEventListener('click', function () {
        let item = this.getAttribute('data-id');
        cart(item);
    });
}

// CALLBACK FUNCTION
// function cart(item) {
    // console.log(food[item]);
// }


const foods = [
    {
        name: 'Apple Juice',
        price: 5.25,
        brand: 'Motts'
    },
    {
        name: 'Pizza',
        price: 10.75,
        brand: 'Udies'
    },
    {
        name: 'Ice Cream',
        price: 5.35,
        brand: 'Halo Top'
    }
]
const foodOutput = document.getElementById('foods');

for (const idx in foods) {
    const food = foods[idx];
    // CREATE AND ADD ELEMENT TO THE DOM
    let el = document.createElement('li');
    el.innerText = `${food.name} - ${food.brand} : $${food.price}`;
    foodOutput.appendChild(el);
    // ---------------------------------

    // ADD AN EVENT LISTENER
    el.addEventListener('click', addToCart);
}

let cart = {}
function addToCart() {
    let item = this.getAttribute('data-id');
    let food = foods[item];
    if (cart[food.name]) {
        cart[food.name].qty++;
    } else {
        cart[food.name] = {
            qty: 1,
            price: food.price
        };
    }
    console.log(cart);
}