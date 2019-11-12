var itemOne = document.getElementById('one');
itemOne.classList.add('foo');
itemOne.style.color = 'red';
itemOne.innerText = 'hello';
var temp2 = itemOne.innerText;
console.log(temp2);
var foo3 = document.querySelector('li.foo');
console.log(foo3);

var foo4 = document.getElementsByClassName('foo');
console.log(foo4);
// foo4.foreach(function(el){
//     console.log(el);
// });

var foo5 = document.getElementsByTagName('li');
console.log(foo5);
console.log(foo5.item(1));

var foo6 = document.querySelectorAll('.foo');
console.log(foo6);
console.log(foo6.item(1));

console.log(foo3.parentNode);
console.log(foo3.previousSibling);
console.log(foo3.nextSibling);

var output = document.getElementById('output');
for (let i = 0; i < 5; i++) {
    let el = document.createElement('li');
    el.innerText = 'This is element: $(i)';
    output.appendChild(el);
}

var button = document.querySelector('.button');
button.addEventListener('click', function (event) {
    let button = event.target;
    if (button.getAttribute('data-char') == 'x') {
        console.log('times');
    }
});