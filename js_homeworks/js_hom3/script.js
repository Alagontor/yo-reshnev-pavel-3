//№1Используя рекурсию попросите пользователя ввести возраст, если он больше 18, то покажите сообщение об успехе, если меньше, то запустите функцию снова.
//Подсказка! + Пасхалка к тому как я делаю домашки!
/*
function canShowlmg(age) {
   if(age >= 18) { return true;}
   else { return false;}
}
function showimg(age) {
   if (!canShowlmg(age)) {
      return;
   }

   console.log('https://userpic.fishki.net/2021/02/12/1779359/34e66ded0ec312d472a4070c5640c28d.jpg')

}

showimg(11);
showimg(18);
*/
// Вроде написано верно, но не понимаю почему не работает мой prompt! Есть пример рекурсии похожий у нас в лекции и там все ок, вроде всё похоже, а не пашит?
function canShowlmg() {
   const num = prompt('Введите свой возраст');
   if (+num < 18) {
      canShowlmg()
   }
   else {
      alert('Поздравляем вы достигли 19 лет!');
   }
};


//№2Напишите 4 чистые функции, add (сложение 2 чисел), subtract (вычитание из первого аргумента второго), divide (деление первого аргумента на второй) и multiply (умножение). В комментариях напишите, почему эти функции чистые.
/*
function add(a,b) {
   return a + b;
}

add(2,3);//5

function subtract(a,b) {
   return a - b;
}

subtract(5,2);//3

function divide(a,b) {
   return a/b;
}

divide(6,2)//3

function multiply(a,b) {
   return a*b;
}

multiply(3,3)//9
*/
//Не пишет и не читает глобальные элементы. Не выводит ничего на экран. Не оставляет побочные эффекты не влияет на внешние.

//Напишите функцию addCreator, которая будет работать по коду на след слайде.
//№3 Естественно уже забыл готовое решение хи-хи), попробую разобраться! 
