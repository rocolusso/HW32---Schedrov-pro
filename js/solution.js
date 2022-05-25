'use strict';

/*
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка в консоль :

1 Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of)
и записать значение каждого атрибута в массив — вывести этот массив в консоль

2 Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
3 С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
4 Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
5 Удалить у тега ul атрибут ‘data-dog-tail‘
 */

const getUl = document.getElementById('ulId');
const arrLi = Array.from(getUl.children);
let arrUlInner = [];
let arrInnerNames = [];
const myName = 'Пит';
const myNameAttr = 'data-my-name';


for (let li of arrLi) {
        arrUlInner.push(li.innerHTML);
}

for (let li of arrLi) {
    arrInnerNames.push(li.nodeName);
}

console.log(`*******TASK 1: Array with list of li inner ******* \n\n`+ arrUlInner);
console.log(`*******TASK 2: Array with list of li nodeName's ******* \n\n`+ arrInnerNames);

getUl.lastElementChild.innerHTML =  `Привет, меня зовут ${myName} `;
getUl.firstElementChild.setAttribute(myNameAttr, myName );
getUl.removeAttribute('data-dog-tail');