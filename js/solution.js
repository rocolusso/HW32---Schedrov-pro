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
void function () {
    const ul = document.getElementById('ulId');
    const ulInnerElements = ul.children;
    console.log(ulInnerElements);        // task 0

    const ulAttributesNames = ul.getAttributeNames();
    const ulAttrValues = [];

    for (let i of ulAttributesNames){
        ulAttrValues.push(ul.attributes.item(ulAttributesNames.indexOf(i)).nodeValue);
    }
    console.log(`*******TASK 1: ul tag attributes values ******* `+ ulAttrValues)
    console.log(`*******TASK 2: ul tag attributes names ******* `+ ulAttributesNames)

    const userName = 'Пит';
    ul.lastElementChild.innerHTML = `Привет, меня зовут ${userName}`; //task 3
    ul.firstElementChild.setAttribute('data-my-name',`${userName}`); //task 4
    ul.removeAttribute('data-dog-tail'); //task 5
}();